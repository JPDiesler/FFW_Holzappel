# Check if the PSMenu module is installed
if (!(Get-Module -ListAvailable -Name PSMenu)) {
    # If not installed, install the module
    Install-Module -Name PSMenu -Scope CurrentUser -Force
}

# Import the module
Import-Module PSMenu


# Define the options
$AG_options = @('AG-Bauleiter', 'AG-Polier', 'AG-IT', 'AG-Verwaltung','AG-Vorstand')
$DAW_options = @('DAW-Objektleiter', 'DAW-Verwaltung')
# Show the menu and get the selected option
$selectedOption = Show-Menu (@('Basic') + $AG_options + $DAW_options)

# Display the selected option
Write-Host "You selected: $selectedOption"
Write-Host "[" -NoNewline -ForegroundColor White
Write-Host "`u{2714}" -NoNewline -ForegroundColor Green
Write-Host "]" -ForegroundColor White

# Define a list of tasks
$tasks = @(
    @{
        Name = 'Update Windows'
        Instructions = @(Start-Sleep -Seconds 5)
        Status = $false
    },
    @{
        Name = 'Install RMM Agent'
        Instructions = @(Start-Sleep -Seconds 5)
        Status = $false
    },
    @{
        Name = 'Install Software'
        Instructions = @(Start-Sleep -Seconds 5)
        Status = $false
    },
    @{
        Name = 'Add to Domain'
        Instructions = @(Start-Sleep -Seconds 5)
        Status = $false
    }
)

# Function to display the tasks and their status
function Display-Tasks {
    param ($tasks)

    foreach ($task in $tasks) {
        if ($task.Status) {
            # Task is done, display with a green check mark
            Write-Host "[" -NoNewline -ForegroundColor White
            Write-Host "`u{2714}" -NoNewline -ForegroundColor Green
            Write-Host "]" -NoNewline -ForegroundColor White
        } else {
            # Task is not done, display with an empty box
            Write-Host "[ ]" -NoNewline -ForegroundColor White
        }
        Write-Host " $($task.Name)"
    }
}

# Display the tasks before execution
Display-Tasks -tasks $tasks

# Compute the instructions for each task
foreach ($task in $tasks) {
    foreach ($instruction in $task.Instructions) {
        # Compute the instruction (replace this with actual computation)
        Write-Host "Computing $instruction..."

        # If this is the last instruction for the task, mark the task as done
        if ($instruction -eq $task.Instructions[-1]) {
            $task.Status = $true
        }
    }

    # Display the tasks after each task execution
    Display-Tasks -tasks $tasks
}