//
    var maxVoltage = 250000;
    var maxCurrent = 2000;
    var stepVoltage = [0, 127000, 220000, 250000];
    var stepCurrent = [0, 1000, 2000];

    // Guage options
    var opts = {
        angle: 0, // The span of the gauge arc
        lineWidth: 0.44, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.71, // // Relative to gauge radius
            strokeWidth: 0.042, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF',   // Colors
        colorStop: '#8FC0DA',    // just experiment with them
        strokeColor: '#E0E0E0',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support
        staticLabels: {
            font: "10px sans-serif",  // Specifies font
            labels: stepVoltage,  // Print labels at these values
            color: "#000000",  // Optional: Label text color
            fractionDigits: 0  // Optional: Numerical precision. 0=round off.
        },
        // renderTicks is Optional
        renderTicks: {
            divisions: 3,
            divWidth: 1.3,
            divLength: 0.77,
            divColor: '#333333',
            subDivisions: 3,
            subLength: 0.5,
            subWidth: 0.6,
            subColor: '#666666'
        }
    };

    var opts_current = {
        angle: 0, // The span of the gauge arc
        lineWidth: 0.44, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.71, // // Relative to gauge radius
            strokeWidth: 0.042, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF',   // Colors
        colorStop: '#8FC0DA',    // just experiment with them
        strokeColor: '#E0E0E0',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support
        staticLabels: {
            font: "10px sans-serif",  // Specifies font
            labels: stepCurrent,  // Print labels at these values
            color: "#000000",  // Optional: Label text color
            fractionDigits: 0  // Optional: Numerical precision. 0=round off.
        },
        // renderTicks is Optional
        renderTicks: {
            divisions: 3,
            divWidth: 1.3,
            divLength: 0.77,
            divColor: '#333333',
            subDivisions: 3,
            subLength: 0.5,
            subWidth: 0.6,
            subColor: '#666666'
        }
    };

    var sm = [];
    for (var i = 0; i < 2; i++)
    {
        sm[i] = [];

        for(var j = 1; j <= 3; j++)
        {
           var elementId = 'sm'+i.toString()+'_V'+j.toString()
            sm[i][j] = new Gauge(
                document.getElementById(elementId), {
                  label: function(value) {
                    return value;
                  }
                }
            ).setOptions(opts); // create sexy gauge!
            elementId = elementId+'_textfield'
            sm[i][j].setTextField(document.getElementById(elementId));
            sm[i][j].maxValue = maxVoltage; // set max gauge
            sm[i][j].setMinValue(0);  // Prefer setter over gauge.minValue = 0
            sm[i][j].animationSpeed = 50; // set animation speed (32 is default value)
            sm[i][j].set(0); // set actual value
        }
        for(var j = 1; j <= 3; j++)
        {
            elementId = 'sm'+i.toString()+'_A'+j.toString()
            sm[i][j+3] = new Gauge(
                document.getElementById(elementId), {
                  label: function(value) {
                    return value;
                  }
                }
            ).setOptions(opts_current); // create sexy gauge!
            elementId = elementId+'_textfield'
            sm[i][j+3].setTextField(document.getElementById(elementId));
            sm[i][j+3].maxValue = maxCurrent; // set max gauge
            sm[i][j+3].setMinValue(0);  // Prefer setter over gauge.minValue = 0
            sm[i][j+3].animationSpeed = 50; // set animation speed (32 is default value)
            sm[i][j+3].set(0); // set actual value
        }
        elementId = 'sm'+i.toString()+'_AN'
        sm[i][7] = new Gauge(
            document.getElementById(elementId), {
              label: function(value) {
                return value;
              }
            }
        ).setOptions(opts_current); // create sexy gauge!
        elementId = elementId+'_textfield'
        sm[i][7].setTextField(document.getElementById(elementId));
        sm[i][7].maxValue = maxCurrent; // set max gauge
        sm[i][7].setMinValue(0);  // Prefer setter over gauge.minValue = 0
        sm[i][7].animationSpeed = 50; // set animation speed (32 is default value)
        sm[i][7].set(0); // set actual value
    }
    console.log(sm);

    function callme(){
    //This promise will resolve when the network call succeeds
    //Feel free to make a REST fetch using promises and assign it to networkPromise
    var networkPromise = fetch('/get_server_data')
      .then(response => response.json())
      .then(data => {
        console.log(data);

        for(var i = 0; i < 2; i++)
        {
            if(i.toString() in data)
            {
                console.log('Element '+i+' found.');
                var elementId = 'sm'+i.toString();
                document.getElementById(elementId).style.display = 'inline';
                elementId = elementId + '_label';
                document.getElementById(elementId).innerHTML = data[i]['device_name'];

                sm[i][1].set(data[i]['l1_voltage']);
                sm[i][2].set(data[i]['l2_voltage']);
                sm[i][3].set(data[i]['l3_voltage']);
                sm[i][4].set(data[i]['l1_current']);
                sm[i][5].set(data[i]['l2_current']);
                sm[i][6].set(data[i]['l3_current']);
                sm[i][7].set(data[i]['n_current']);

                elementId = 'sm' + i.toString() + '_timestamp';
                document.getElementById(elementId).innerHTML = 'Timestamp: ' + data[i]['timestamp'];
            }
            else
            {
                console.log('Element '+i+' not found.');
                var elementId = 'sm'+i.toString();
                document.getElementById(elementId).style.display = 'none';
            }
        }
      });

    //This promise will resolve when 2 seconds have passed
    var timeOutPromise = new Promise(function(resolve, reject) {
      // 2 Second delay
      setTimeout(resolve, 5000, 'Timeout Done');
    });

    Promise.all(
    [networkPromise, timeOutPromise]).then(function(values) {
      console.log("Atleast 5 secs + TTL (Network/server)");
      //Repeat
      callme();
    });
    }
    callme();