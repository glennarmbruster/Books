[CmdletBinding()]
param(
    [string] $InputPath = (Join-Path $PSScriptRoot 'review-window.csv'),
    [Parameter(Mandatory)] [ValidateNotNullOrEmpty()] [string] $OutputPath
)
$ErrorActionPreference = 'Stop'
$rows = @(Import-Csv -LiteralPath $InputPath)
if ($rows.Count -ne 4) { throw 'Expected four probe results.' }
$fields = 'Evidence','Window','Probe','Expected','Observed'
if (Compare-Object $fields @($rows[0].PSObject.Properties.Name)) { throw 'Check the five column names.' }
$expected = @{ ReceiptTag = 'Tagged'; OrdinaryMail = 'Plain' }
$seen = @{}
$seenIds = @{}
$report = foreach ($row in $rows) {
    $key = "$($row.Window)/$($row.Probe)"
    if ($row.Window -cnotin 'Before','After' -or $row.Probe -cnotin 'ReceiptTag','OrdinaryMail' -or
        $row.Expected -cne $expected[$row.Probe] -or $row.Observed -cnotin 'Tagged','Plain' -or
        $row.Evidence -cnotmatch '^W[1-4]$' -or $seen.ContainsKey($key) -or $seenIds.ContainsKey($row.Evidence)) {
        throw "Invalid or repeated row at $key."
    }
    $seen[$key] = $true
    $seenIds[$row.Evidence] = $true
    [pscustomobject]@{ Evidence = $row.Evidence; Window = $row.Window; Probe = $row.Probe
        Expected = $row.Expected; Observed = $row.Observed; Pass = ($row.Observed -ceq $row.Expected) }
}
$report | Export-Csv -LiteralPath $OutputPath -NoTypeInformation -NoClobber
