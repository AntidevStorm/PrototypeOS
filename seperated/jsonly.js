function skipLoading() {
            document.getElementById("loading-screen").style.display = "none";
            showDesktop(); // Function to reveal the desktop
        }

        // Function to skip the installation screen
function skipInstallation() {
            document.getElementById("installation-screen").style.display = "none";
            showDesktop(); // Function to reveal the desktop
        }

        // Function to reveal the desktop
function showDesktop() {
            document.getElementById("desktop").style.display = "flex";
        }

        // Function to open apps
function openApp(appName) {
            switch (appName) {
                case 'Calculator':
                    alert("Calculator app opened.");
                    break;
                case 'Browser':
                    alert("Web Browser app opened.");
                    break;
                case 'FileManager':
                    alert("File Manager app opened.");
                    break;
            }
        }

        // Function to toggle the start menu
function toggleStartMenu() {
            var startMenu = document.getElementById("start-menu");
            if (startMenu.style.display === "block") {
                startMenu.style.display = "none";
            } else {
                startMenu.style.display = "block";
            }
        }

        // Function to open the BIOS
function openBios() {
            // Hide other containers (Notepad)
            document.getElementById("notepad-container").style.display = "none";
            // Show the BIOS container
            document.getElementById("bios-container").style.display = "block";
        }

        // Function to exit the BIOS
function exitBios() {
            // Hide the BIOS container
            document.getElementById("bios-container").style.display = "none";
        }

        // Function to close all open apps
function closeAllApps() {
            // Hide Notepad container
            document.getElementById("notepad-container").style.display = "none";
            // Hide BIOS container
            document.getElementById("bios-container").style.display = "none";
        }

        // Function to save content in Notepad
function saveNotepad() {
            var notepadContent = document.getElementById("notepad-content").value;
            alert("Notepad content saved:\n\n" + notepadContent);
        }

        // Additional BIOS functions or app-specific functionality

        // Simulate loading and installation (for demonstration purposes)
setTimeout(function() {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("installation-screen").style.display = "block";
            // Simulate installation progress (update the progress bar)
            var progress = 0;
            var progressBar = document.querySelector("progress");
            var interval = setInterval(function() {
                progress += 10;
                progressBar.value = progress;
                if (progress >= 100) {
                    clearInterval(interval);
                    showDesktop();
                
                }
              function skipLoading() {
            document.getElementById("loading-screen").style.display = "none";
            showDesktop(); // Function to reveal the desktop
        }

        // Function to skip the installation screen
        function skipInstallation() {
            document.getElementById("installation-screen").style.display = "none";
            showDesktop(); // Function to reveal the desktop
        }

        // Function to reveal the desktop
        function showDesktop() {
            document.getElementById("desktop").style.display = "flex";
        }

        // Function to open apps
        function openApp(appName) {
            switch (appName) {
                case 'Calculator':
                    alert("Calculator app opened.");
                    break;
                case 'Browser':
                    alert("Web Browser app opened.");
                    break;
                case 'FileManager':
                    alert("File Manager app opened.");
                    break;
            }
        }

        // Function to toggle the start menu
        function toggleStartMenu() {
            var startMenu = document.getElementById("start-menu");
            if (startMenu.style.display === "block") {
                startMenu.style.display = "none";
            } else {
                startMenu.style.display = "block";
            }
        }

        // Function to open the BIOS
        function openBios() {
            // Hide other containers (Notepad)
            document.getElementById("notepad-container").style.display = "none";
            // Show the BIOS container
            document.getElementById("bios-container").style.display = "block";
        }

        // Function to exit the BIOS
        function exitBios() {
            // Hide the BIOS container
            document.getElementById("bios-container").style.display = "none";
        }

        // Function to close all open apps
        function closeAllApps() {
            // Hide Notepad container
            document.getElementById("notepad-container").style.display = "none";
            // Hide BIOS container
            document.getElementById("bios-container").style.display = "none";
        }

        // Function to save content in Notepad
        function saveNotepad() {
            var notepadContent = document.getElementById("notepad-content").value;
            alert("Notepad content saved:\n\n" + notepadContent);
        }

        // Additional BIOS functions or app-specific functionality

        // Simulate loading and installation (for demonstration purposes)
        setTimeout(function() {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("installation-screen").style.display = "block";
            // Simulate installation progress (update the progress bar)
            var progress = 0;
            var progressBar = document.querySelector("progress");
            var interval = setInterval(function() {
                progress += 10;
                progressBar.value = progress;
                if (progress >= 100) {
                    clearInterval(interval);
                    showDesktop();
                }
            }, 500); // Update every half second
        }, 10000); // Simulate loading for 10 seconds
            }, 500); // Update every half second
        }, 10000); // Simulate loading for 10 seconds
