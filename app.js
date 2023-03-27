const teams = ["ETHIOPIA","EGYPT", "ENGLAND", "CAMEROON", "USA", "ARGENTINA", "BRAZIL", "FRANCE", "SPAIN", "PORTUGAL", "SUDAN", "MEXICO", "GERMANY", "SENEGAL", "NORTH KOREA", "MALI"];

      let groups = [];
      
      function displayTeams() {
        const teamsList = document.getElementById("teams-list");
        teamsList.innerHTML = "";
        teams.forEach((team) => {
          const listItem = document.createElement("li");
          listItem.innerText = team;
          teamsList.appendChild(listItem);
        });
      }
      
      function makeGroups() {
        const shuffled = teams.sort(() => 0.5 - Math.random());
        groups = [    [shuffled[0], shuffled[1], shuffled[2], shuffled[3]],
          [shuffled[4], shuffled[5], shuffled[6], shuffled[7]],
          [shuffled[8], shuffled[9], shuffled[10], shuffled[11]],
          [shuffled[12], shuffled[13], shuffled[14], shuffled[15]],
        ];
        const groupsList = document.getElementById("groups-list");
        groupsList.innerHTML = "";
        groups.forEach((group, index) => {
          const groupHeader = document.createElement("h2");
          groupHeader.innerText = "Group " + String.fromCharCode(65 + index);
          groupsList.appendChild(groupHeader);
          const groupList = document.createElement("ul");
          group.forEach((team) => {
            const listItem = document.createElement("li");
            listItem.innerText = team;
            groupList.appendChild(listItem);
          });
          groupsList.appendChild(groupList);
        });
      }
      
      function makePieChart() {
        const groupIndex = prompt("Choose a group from (A-D) want to compare:");
        const groupLetter = groupIndex.trim().toUpperCase();
        const groupNumber = groupLetter.charCodeAt(0) - 65;
        if (isNaN(groupNumber) || groupNumber < 0 || groupNumber >= groups.length) {
          alert("Invalid group index.");
          return;
        }
        const group = groups[groupNumber];
        const chartData = {
          labels: group,
          datasets: [
            {
              label: "Points",
              data: [],
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#00CCFF",
                "#FF5733",
                "#C70039",
                "#900C3F",
                "#581845",
                "#FFC300",
                "#DAF7A6",
                "#FF5733",
                "#C70039",
                "#900C3F",
                "#581845",
                "#FFC300",
                "#DAF7A6",
              ]
            }
          ]
        };
        group.forEach((team) => {
          const pointsInput = prompt(`Enter points earned by ${team} in Group ${groupLetter}.`);
          const points = parseInt(pointsInput, 10);
          if (isNaN(points)) {
            alert(`Points earned by ${team} must be a number.`);
            return;
          }
          chartData.datasets[0].data.push(points);
        });
        const chartCanvas = document.getElementById("pie-chart");
        chartCanvas.width = chartCanvas.offsetWidth;
        chartCanvas.height = chartCanvas.offsetHeight;
        const ctx = chartCanvas.getContext("2d");
        ctx.clearRect(0, 0, chartCanvas.width, chartCanvas.height);
        const myPieChart = new Chart(ctx, {
          type: 'pie',
          data: chartData,
          });
          }
