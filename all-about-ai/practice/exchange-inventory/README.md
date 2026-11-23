# Devin Lab 1 · Read-only Exchange Online mailbox inventory

Use PowerShell 7 on a workstation. The rehearsal uses synthetic mailboxes on the reserved example.test domain. It needs no Exchange module, credentials or connection. The iPad book has the full guided lab.

## Starter repository

Put mailboxes.csv and Test-Inventory.ps1 in the root of a practice repository available to Devin. Ask Devin to create Get-MailboxInventory.ps1 beside them. Keep Reference/ on your own workstation as the answer key. Run the following in PowerShell from the extracted folder.

    ./Test-Inventory.ps1 -Script ./Get-MailboxInventory.ps1

## Run the included answer

    ./Reference/Get-MailboxInventory.ps1 -InputCsv ./mailboxes.csv -OutputCsv ./report.csv
    Import-Csv ./report.csv | Format-Table -AutoSize
    ./Test-Inventory.ps1 -Script ./Reference/Get-MailboxInventory.ps1

Use a fresh output filename for each attempt. Expect four rows in address order, two user and two shared mailboxes, followed by five PASS lines from the tests. The last test shadows Get-EXOMailbox with a local function. Review an AI-written candidate before executing it. The fixture harness expects the exact Get-EXOMailbox dependency and parameter names given in the lab.

## Optional connected report

The book includes a separate procedure for an authorized workstation and a restricted account with permission to read the intended mailboxes. The live path uses one Get-EXOMailbox query and writes the CSV on that workstation. Keep the live CSV outside the practice repository.
