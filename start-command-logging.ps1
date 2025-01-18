# Create a simple function to log commands
function prompt {
    $command = Get-History -Count 1
    if ($command) {
        $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
        "$timestamp [vscode] $($command.CommandLine)" | Out-File ".\commands-history.txt" -Append
    }
    "PS $($executionContext.SessionState.Path.CurrentLocation)> "
}

Write-Host "Command logging started - commands will be saved to commands-history.txt"

#Then in any new terminal you open in VS Code, just run:   . .\start-command-logging.ps1

