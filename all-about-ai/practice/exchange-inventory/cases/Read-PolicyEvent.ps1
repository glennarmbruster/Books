# PE1 · Practice script
[CmdletBinding()]
param(
    [Parameter(Mandatory)][ValidateNotNullOrEmpty()][string]$EventId,
    [Parameter(Mandatory)][ValidateNotNullOrEmpty()][string]$OutputPath,
    [string]$InputPath = (Join-Path $PSScriptRoot 'entra-signins.csv')
)
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$rows = @(Import-Csv -LiteralPath $InputPath)
if ($rows.Count -eq 0) { throw 'The event extract is empty.' }
$fields = 'Row','Utc','Event','Device','Resource','Outcome','Policy','Mode','PolicyResult'
foreach ($field in $fields) {
    if ($field -notin $rows[0].PSObject.Properties.Name) { throw "Missing column: $field" }
}
$seen = @{}
foreach ($row in $rows) {
    foreach ($field in $fields) {
        if ([string]::IsNullOrWhiteSpace($row.$field)) { throw "Empty $field in the extract." }
    }
    if ($seen.ContainsKey($row.Row)) { throw "Duplicate row label: $($row.Row)" }
    $seen[$row.Row] = $true
}
$found = @($rows | Where-Object { $_.Event -eq $EventId })
if ($found.Count -eq 0) { throw "No rows for event $EventId." }
$found | Select-Object $fields | Export-Csv -LiteralPath $OutputPath -NoClobber -NoTypeInformation
