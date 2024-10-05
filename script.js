const button = document.getElementById("addTask")

        button.addEventListener('click', function (event) {
            let task = document.getElementById("task").value.trim()
            let startTime = document.getElementById("startTimeInput").value
            let endTime = document.getElementById("endTimeInput").value
            
            if (!task) {
                alert("Enter a task to add")
                return
            }

            const li = document.createElement("li")
            li.textContent = `${task} From: ${startTime} - To: ${endTime}`
            document.body.appendChild(li)

            document.getElementById("task").value = ""
            document.getElementById("startTimeInput").value = ""
            document.getElementById("endTimeInput").value = ""
        })