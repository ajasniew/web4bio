console.log('cdcHeroinDeaths.js loaded');


 CDC={};
 CDC.loadData=function(){
     $.getJSON('https://evergreen.data.socrata.com/resource/d26f-b5yf.json')
     .then(function(x){
         CDC.data = x;
         console.log('done loading data');
         $('<p>'+'just loaded '+x.length+' rows</p>').appendTo(document.body);
     })
 }

 //CDC.loadData();


Plotly.d3.json('https://evergreen.data.socrata.com/resource/d26f-b5yf.json', 
  function(items){
	  var index;
	  var year= [];
	  var y1  = [];
	  var y2  = [];
    
	  for	(index = 0; index < items.length; index++) {
	  	year.push(items[index].year);
	  	y1.push(items[index].heroin_addiction_per_1_000_people);
	  	y2.push(items[index].heroin_related_overdose_deaths_per_100_000_people);
	  }
    

    var trace1 = {
      x: year,
      y: y1,
      name: 'Heroin Addiction (per 1,000 people)',
      marker: {color: 'rgb(55, 83, 109)'},
      type: 'bar'
    };

    var trace2 = {
      x: year,
      y: y2,
      name: 'Heroin Related Overdose Deaths (per 100,000 people)',
      marker: {color: 'rgb(26, 118, 255)'},
      type: 'bar'
    };

    var data = [trace1, trace2];

    var layout = {
      title: 'US Heroin Addiction & Deaths 2002-2013',
      xaxis: {tickfont: {
          size: 14,
          color: 'rgb(107, 107, 107)'
        }},
      yaxis: {
        title: '',
        titlefont: {
          size: 16,
          color: 'rgb(107, 107, 107)'
        },
        tickfont: {
          size: 14,
          color: 'rgb(107, 107, 107)'
        }
      },
      legend: {
        x: 0,
        y: 1.0,
        bgcolor: 'rgba(255, 255, 255, 0)',
        bordercolor: 'rgba(255, 255, 255, 0)'
      },
      barmode: 'group',
      bargap: 0.15,
      bargroupgap: 0.1
    };

    Plotly.newPlot('myDiv', data, layout);

    }
);
