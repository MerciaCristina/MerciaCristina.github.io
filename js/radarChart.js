(function () {
    const ctxCode = document.getElementById('codeSkills').getContext('2d');
    const ctxArt = document.getElementById('artSkills').getContext('2d');
    const ctxTool = document.getElementById('toolSkills').getContext('2d');

    const toolSkills = new Chart(ctxTool, {
        type: 'radar',
        data: {
            labels: [
                'Visual Studio Code',
                'Unity',
                'Paint.Net',
                'Construct 2',
                'Clickteam Studio 2.5',
                'Blender',
                'Photoshop',
                'Paint Tool SAI'
            ],
            datasets: [{
                label: 'Tool Skills',
                lineTension: 0.05,
                backgroundColor: '#ff8e723a',
                borderColor: '#ff8e7278',
                pointBackgroundColor: '#ff8e72',
                pointHoverRadius: 5,
                data: [70, 40, 90, 60, 50, 30, 50, 80]
            }]
        },
        options: {
            responsive: true,
            tooltips: {
                callbacks: {
                    label: () => null,
                    title: (e) => `Total: ${e[0].value}`
                }
            },
            scale: {
                pointLabels: {
                    fontSize: 14,
                    fontStyle: '300',
                    fontColor: '#ff8e72',
                    fontFamily: "'Lato', sans-serif"
                },
                angleLines: {
                    display: true,
                    lineWidth: 0.2,
                    color: '#F2F2F2'
                },
                gridLines: {
                    lineWidth: 0.4,
                    color: '#F2F2F2'
                },
                ticks: {
                    beginAtZero: true,
                    display: false,
                    max: 100,
                    stepSize: 20
                }
            }
        }
    })

    const artSkills = new Chart(ctxArt, {
        type: 'radar',
        data: {
            labels: [
                'Pixel Art',
                'Illustration',
                'Music',
            ],
            datasets: [{
                label: 'Art Skills',
                lineTension: 0.05,
                backgroundColor: '#ff63843a',
                borderColor: '#ff638478',
                pointBackgroundColor: '#ff6384',
                pointHoverRadius: 5,
                data: [90, 70, 10]
            }]
        },
        options: {
            responsive: true,
            tooltips: {
                callbacks: {
                    label: () => null,
                    title: (e) => `Total: ${e[0].value}`
                }
            },
            scale: {
                pointLabels: {
                    fontSize: 14,
                    fontStyle: '300',
                    fontColor: '#ff6384',
                    fontFamily: "'Lato', sans-serif"
                },
                angleLines: {
                    display: true,
                    lineWidth: 0.2,
                    color: '#F2F2F2'
                },
                gridLines: {
                    lineWidth: 0.4,
                    color: '#F2F2F2'
                },
                ticks: {
                    beginAtZero: true,
                    display: false,
                    max: 100,
                    stepSize: 20
                }
            }
        }
    })

    const codeSkills = new Chart(ctxCode, {
        type: 'radar',
        data: {
            labels: [
                'C#',
                'Javascript',
                'CSS',
                'HTML5',
                'ReactJS',
                'AngularJS',
                'VueJS',
                'SASS',
                'NodeJS',
                'Express',
                'MongoDB',
                'SQL',
                'Socket.io',
            ],
            datasets: [{
                label: 'Code Skills',
                lineTension: 0.05,
                backgroundColor: '#46BFBD3a',
                borderColor: '#46BFBD78',
                pointBackgroundColor: '#46BFBD',
                pointHoverRadius: 5,
                data: [30, 80, 80, 60, 70, 80, 10, 70, 40, 50, 50, 10, 30]
            }]
        },
        options: {
            responsive: true,
            tooltips: {
                callbacks: {
                    label: () => null,
                    title: (e) => `Total: ${e[0].value}`
                }
            },
            scale: {
                pointLabels: {
                    fontSize: 14,
                    fontStyle: '300',
                    fontColor: '#46BFBD',
                    fontFamily: "'Lato', sans-serif"
                },
                angleLines: {
                    display: true,
                    lineWidth: 0.2,
                    color: '#F2F2F2'
                },
                gridLines: {
                    lineWidth: 0.4,
                    color: '#F2F2F2'
                },
                ticks: {
                    beginAtZero: true,
                    display: false,
                    max: 100,
                    stepSize: 20
                }
            }
        }
    })

    // var skillChart = new Chart(ctx, {
    //     type: 'radar',
    //     data: {
    //         labels: [
    //             'Javascript', 
    //             'CSS', 
    //             'HTML5', 
    //             'ReactJS', 
    //             'AngularJS', 
    //             'VueJS', 
    //             'SASS', 
    //             'NodeJS', 
    //             'Express', 
    //             'MongoDB', 
    //             'SQL', 
    //             'Socket.io',
    //             'Pixel Art',
    //             'Ilustration',
    //             'Music',
    //             'Visual Studio Code',
    //             'Unity',
    //             'Paint.Net',
    //             'Construct 2',
    //             'Clickteam Studio 2.5',
    //             'Blender',
    //             'Photoshop',
    //             'Paint Tool SAI'
    //         ],
    //         datasets: [{
    //             label: 'Code Skills',
    //             backgroundColor: '#4580CD3a',
    //             borderColor: '#4580CD78',
    //             pointBackgroundColor: '#4580CD',
    //             data: [80, 80, 60, 70, 80, 10, 70, 40, 50, 50, 10, 30, 90, 70,]
    //         },
    //         {
    //             label: 'Art Skills',
    //             backgroundColor: ['#4580CD', '#ff6384', '#ff8e72', '#46BFBD', '#FDB45C'],
    //             borderColor: ['#4580CD', '#ff6384', '#ff8e72', '#46BFBD', '#FDB45C'],
    //             pointBackgroundColor: ['#4580CD', '#ff6384', '#ff8e72', '#46BFBD', '#FDB45C'],
    //             data: [0, 0, 0, 2]
    //         },
    //         {
    //             label: 'Tool Skills',
    //             backgroundColor: ['#4580CD', '#ff6384', '#ff8e72', '#46BFBD', '#FDB45C'],
    //             borderColor: ['#4580CD', '#ff6384', '#ff8e72', '#46BFBD', '#FDB45C'],
    //             pointBackgroundColor: ['#4580CD', '#ff6384', '#ff8e72', '#46BFBD', '#FDB45C'],
    //             data: [0, 0, 0, 2]
    //         }],
    //     }
    // })
})();