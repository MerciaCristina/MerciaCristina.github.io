(function () {
    const ctxCode = document.getElementById('codeSkills').getContext('2d');
    const ctxArt = document.getElementById('artSkills').getContext('2d');
    const ctxTool = document.getElementById('toolSkills').getContext('2d');
    const ctxEnglish = document.getElementById('englishSkills').getContext('2d');

    const englishSkills = new Chart(ctxEnglish, {
        type: 'radar',
        data: {
            labels: [
                'Read',
                'Write',
                'Talk',
                'Listen'
            ],
            datasets: [{
                label: 'English Skills',
                lineTension: 0.05,
                backgroundColor: '#FDB45C3a',
                borderColor: '#FDB45C78',
                pointBackgroundColor: '#FDB45C',
                pointBorderColor:'#f2f2f2',
                data: [70, 50, 20, 40]
            }]
        },
        options: {
            animation: {
                duration: 500,
                onProgress: function() {
                    
                    var chartInstance = this.chart,
                    ctx = chartInstance.ctx;

                    ctx.textAlign = 'center';
                    ctx.fillStyle = '#f2f2f2';
                    ctx.fontFamily ='Catamaran';

                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];                            
                            ctx.fillText(data, bar._model.x, bar._model.y - 10);
                        });
                    });
                    
                },
                onComplete: function() {
                    
                    var chartInstance = this.chart,
                    ctx = chartInstance.ctx;

                    ctx.textAlign = 'center';
                    ctx.fillStyle = '#f2f2f2';
                    ctx.fontFamily ='Catamaran';

                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];                            
                            ctx.fillText(data, bar._model.x, bar._model.y - 10);
                        });
                    });
                    
                },
            },
            legend:{
                onClick: (e) => e.stopPropagation(),
                position:'bottom',
                labels:{
                    fontSize: 14,
                    fontStyle: '600',
                    fontColor: '#f2f2f2',
                    fontFamily: "'Catamaran', sans-serif",
                    padding: 20,
                }
            },
            responsive: true,
            tooltips: {
                enabled:false,
            },
            scale: {
                pointLabels: {
                    fontSize: 14,
                    fontStyle: '300',
                    fontColor: '#FDB45C',
                    fontFamily: "'Catamaran', sans-serif"
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
                    maxTicksLimit: 3
                }
            }
        }
    })

    const toolSkills = new Chart(ctxTool, {
        type: 'radar',
        data: {
            labels: [
                'Visual Studio Code',
                'Unity',
                'Paint.Net',
                'Construct 2',
                'Clickteam Fusion 2.5',
                'Blender',
                'Photoshop',
                'Paint Tool SAI',
                'Git'
            ],
            datasets: [{
                label: 'Tool Skills',
                lineTension: 0.05,
                backgroundColor: '#ff8e723a',
                borderColor: '#ff8e7278',
                pointBackgroundColor: '#ff8e72',
                pointBorderColor:'#f2f2f2',
                data: [70, 40, 90, 60, 50, 30, 50, 80, 70]
            }]
        },
        options: {
            animation: {
                duration: 500,
                onProgress: function() {
                    
                    var chartInstance = this.chart,
                    ctx = chartInstance.ctx;

                    ctx.textAlign = 'center';
                    ctx.fillStyle = '#f2f2f2';
                    ctx.fontFamily ='Catamaran';

                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];                            
                            ctx.fillText(data, bar._model.x, bar._model.y - 10);
                        });
                    });
                    
                },
                onComplete: function() {
                    
                    var chartInstance = this.chart,
                    ctx = chartInstance.ctx;

                    ctx.textAlign = 'center';
                    ctx.fillStyle = '#f2f2f2';
                    ctx.fontFamily ='Catamaran';

                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];                            
                            ctx.fillText(data, bar._model.x, bar._model.y - 10);
                        });
                    });
                    
                },
            },
            legend:{
                onClick: (e) => e.stopPropagation(),
                position:'bottom',
                labels:{
                    fontSize: 14,
                    fontStyle: '600',
                    fontColor: '#f2f2f2',
                    fontFamily: "'Catamaran', sans-serif",
                    padding: 20,
                }
            },
            responsive: true,
            tooltips: {
                enabled:false,
            },
            scale: {
                pointLabels: {
                    fontSize: 14,
                    fontStyle: '300',
                    fontColor: '#ff8e72',
                    fontFamily: "'Catamaran', sans-serif"
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
                    maxTicksLimit: 3
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
                'Animation'
            ],
            datasets: [{
                label: 'Art Skills',
                lineTension: 0.05,
                backgroundColor: '#ff63843a',
                borderColor: '#ff638478',
                pointBackgroundColor: '#ff6384',
                pointBorderColor:'#f2f2f2',
                data: [90, 70, 10, 60]
            }]
        },
        options: {
            animation: {
                duration: 500,
                onProgress: function() {
                    
                    var chartInstance = this.chart,
                    ctx = chartInstance.ctx;

                    ctx.textAlign = 'center';
                    ctx.fillStyle = '#f2f2f2';
                    ctx.fontFamily ='Catamaran';

                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];                            
                            ctx.fillText(data, bar._model.x, bar._model.y - 10);
                        });
                    });
                    
                },
                onComplete: function() {
                    
                    var chartInstance = this.chart,
                    ctx = chartInstance.ctx;

                    ctx.textAlign = 'center';
                    ctx.fillStyle = '#f2f2f2';
                    ctx.fontFamily ='Catamaran';

                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];                            
                            ctx.fillText(data, bar._model.x, bar._model.y - 10);
                        });
                    });
                    
                },
            },
            legend:{
                onClick: (e) => e.stopPropagation(),
                position:'bottom',
                labels:{
                    fontSize: 14,
                    fontStyle: '600',
                    fontColor: '#f2f2f2',
                    fontFamily: "'Catamaran', sans-serif",
                    padding: 20,
                }
            },
            responsive: true,
            tooltips: {
                enabled:false,
            },
            scale: {
                pointLabels: {
                    fontSize: 14,
                    fontStyle: '300',
                    fontColor: '#ff6384',
                    fontFamily: "'Catamaran', sans-serif"
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
                    maxTicksLimit: 3
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
                'Cypress'
            ],
            datasets: [{
                label: 'Code Skills',
                lineTension: 0.05,
                backgroundColor: '#46BFBD3a',
                borderColor: '#46BFBD78',
                pointBackgroundColor: '#46BFBD',
                pointBorderColor:'#f2f2f2',
                data: [30, 80, 80, 60, 70, 80, 10, 70, 40, 50, 50, 10, 30, 40]
            }]
        },
        options: {
            animation: {
                duration: 500,
                onProgress: function() {
                    
                    var chartInstance = this.chart,
                    ctx = chartInstance.ctx;

                    ctx.textAlign = 'center';
                    ctx.fillStyle = '#f2f2f2';
                    ctx.fontFamily ='Catamaran';

                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];                            
                            ctx.fillText(data, bar._model.x, bar._model.y - 10);
                        });
                    });
                    
                },
                onComplete: function() {
                    
                    var chartInstance = this.chart,
                    ctx = chartInstance.ctx;

                    ctx.textAlign = 'center';
                    ctx.fillStyle = '#f2f2f2';
                    ctx.fontFamily ='Catamaran';

                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];                            
                            ctx.fillText(data, bar._model.x, bar._model.y - 10);
                        });
                    });
                    
                },
            },
            legend:{
                onClick: (e) => e.stopPropagation(),
                position:'bottom',
                labels:{
                    fontSize: 14,
                    fontStyle: '600',
                    fontColor: '#f2f2f2',
                    fontFamily: "'Catamaran', sans-serif",
                    padding: 20,
                }
            },
            responsive: true,
            tooltips: {
                enabled:false,
            },
            scale: {
                pointLabels: {
                    fontSize: 14,
                    fontStyle: '300',
                    fontColor: '#46BFBD',
                    fontFamily: "'Catamaran', sans-serif"
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
                    maxTicksLimit: 3
                }
            }
        }
    })
    
})();