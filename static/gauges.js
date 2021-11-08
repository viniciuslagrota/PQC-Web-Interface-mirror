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

    var sm0_V1 = new Gauge(
        document.getElementById("sm0_V1"), {
          label: function(value) {
            return value;
          }
        }
    ).setOptions(opts); // create sexy gauge!
    sm0_V1.setTextField(document.getElementById("sm0_V1_textfield"));
    sm0_V1.maxValue = maxVoltage; // set max gauge value
    sm0_V1.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    sm0_V1.animationSpeed = 50; // set animation speed (32 is default value)
    sm0_V1.set(0); // set actual value

    var sm0_V2 = new Gauge(
        document.getElementById("sm0_V2"), {
          label: function(value) {
            return value;
          }
        }
    ).setOptions(opts); // create sexy gauge!
    sm0_V2.setTextField(document.getElementById("sm0_V2_textfield"))
    sm0_V2.maxValue = maxVoltage; // set max gauge value
    sm0_V2.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    sm0_V2.animationSpeed = 50; // set animation speed (32 is default value)
    sm0_V2.set(0); // set actual value

    var sm0_V3 = new Gauge(
        document.getElementById("sm0_V3"), {
          label: function(value) {
            return value;
          }
        }
    ).setOptions(opts); // create sexy gauge!
    sm0_V3.setTextField(document.getElementById("sm0_V3_textfield"))
    sm0_V3.maxValue = maxVoltage; // set max gauge value
    sm0_V3.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    sm0_V3.animationSpeed = 50; // set animation speed (32 is default value)
    sm0_V3.set(0); // set actual value

    var sm0_A1 = new Gauge(
        document.getElementById("sm0_A1"), {
          label: function(value) {
            return value;
          }
        }
    ).setOptions(opts_current); // create sexy gauge!
    sm0_A1.setTextField(document.getElementById("sm0_A1_textfield"))
    sm0_A1.maxValue = maxCurrent; // set max gauge value
    sm0_A1.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    sm0_A1.animationSpeed = 50; // set animation speed (32 is default value)
    sm0_A1.set(0); // set actual value

    var sm0_A2 = new Gauge(
        document.getElementById("sm0_A2"), {
          label: function(value) {
            return value;
          }
        }
    ).setOptions(opts_current); // create sexy gauge!
    sm0_A2.setTextField(document.getElementById("sm0_A2_textfield"))
    sm0_A2.maxValue = maxCurrent; // set max gauge value
    sm0_A2.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    sm0_A2.animationSpeed = 50; // set animation speed (32 is default value)
    sm0_A2.set(0); // set actual value

    var sm0_A3 = new Gauge(
        document.getElementById("sm0_A3"), {
          label: function(value) {
            return value;
          }
        }
    ).setOptions(opts_current); // create sexy gauge!
    sm0_A3.setTextField(document.getElementById("sm0_A3_textfield"))
    sm0_A3.maxValue = maxCurrent; // set max gauge value
    sm0_A3.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    sm0_A3.animationSpeed = 50; // set animation speed (32 is default value)
    sm0_A3.set(0); // set actual value

    var sm0_AN = new Gauge(
        document.getElementById("sm0_AN"), {
          label: function(value) {
            return value;
          }
        }
    ).setOptions(opts_current); // create sexy gauge!
    sm0_AN.setTextField(document.getElementById("sm0_AN_textfield"))
    sm0_AN.maxValue = maxCurrent; // set max gauge value
    sm0_AN.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    sm0_AN.animationSpeed = 50; // set animation speed (32 is default value)
    sm0_AN.set(0); // set actual value

    var sm1_V1 = new Gauge(
        document.getElementById("sm1_V1"), {
          label: function(value) {
            return value;
          }
        }
    ).setOptions(opts); // create sexy gauge!
    sm1_V1.setTextField(document.getElementById("sm1_V1_textfield"));
    sm1_V1.maxValue = maxVoltage; // set max gauge value
    sm1_V1.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    sm1_V1.animationSpeed = 50; // set animation speed (32 is default value)
    sm1_V1.set(0); // set actual value

    var sm1_V2 = new Gauge(
        document.getElementById("sm1_V2"), {
          label: function(value) {
            return value;
          }
        }
    ).setOptions(opts); // create sexy gauge!
    sm1_V2.setTextField(document.getElementById("sm1_V2_textfield"))
    sm1_V2.maxValue = maxVoltage; // set max gauge value
    sm1_V2.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    sm1_V2.animationSpeed = 50; // set animation speed (32 is default value)
    sm1_V2.set(0); // set actual value

    var sm1_V3 = new Gauge(
        document.getElementById("sm1_V3"), {
          label: function(value) {
            return value;
          }
        }
    ).setOptions(opts); // create sexy gauge!
    sm1_V3.setTextField(document.getElementById("sm1_V3_textfield"))
    sm1_V3.maxValue = maxVoltage; // set max gauge value
    sm1_V3.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    sm1_V3.animationSpeed = 50; // set animation speed (32 is default value)
    sm1_V3.set(0); // set actual value

    var sm1_A1 = new Gauge(
        document.getElementById("sm1_A1"), {
          label: function(value) {
            return value;
          }
        }
    ).setOptions(opts_current); // create sexy gauge!
    sm1_A1.setTextField(document.getElementById("sm1_A1_textfield"))
    sm1_A1.maxValue = maxCurrent; // set max gauge value
    sm1_A1.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    sm1_A1.animationSpeed = 50; // set animation speed (32 is default value)
    sm1_A1.set(0); // set actual value

    var sm1_A2 = new Gauge(
        document.getElementById("sm1_A2"), {
          label: function(value) {
            return value;
          }
        }
    ).setOptions(opts_current); // create sexy gauge!
    sm1_A2.setTextField(document.getElementById("sm1_A2_textfield"))
    sm1_A2.maxValue = maxCurrent; // set max gauge value
    sm1_A2.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    sm1_A2.animationSpeed = 50; // set animation speed (32 is default value)
    sm1_A2.set(0); // set actual value

    var sm1_A3 = new Gauge(
        document.getElementById("sm1_A3"), {
          label: function(value) {
            return value;
          }
        }
    ).setOptions(opts_current); // create sexy gauge!
    sm1_A3.setTextField(document.getElementById("sm1_A3_textfield"))
    sm1_A3.maxValue = maxCurrent; // set max gauge value
    sm1_A3.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    sm1_A3.animationSpeed = 50; // set animation speed (32 is default value)
    sm1_A3.set(0); // set actual value

    var sm1_AN = new Gauge(
        document.getElementById("sm1_AN"), {
          label: function(value) {
            return value;
          }
        }
    ).setOptions(opts_current); // create sexy gauge!
    sm1_AN.setTextField(document.getElementById("sm1_AN_textfield"))
    sm1_AN.maxValue = maxCurrent; // set max gauge value
    sm1_AN.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    sm1_AN.animationSpeed = 50; // set animation speed (32 is default value)
    sm1_AN.set(0); // set actual value


    function callme(){
    //This promise will resolve when the network call succeeds
    //Feel free to make a REST fetch using promises and assign it to networkPromise
    var networkPromise = fetch('/get_server_data')
      .then(response => response.json())
      .then(data => {
        console.log(data);

        if('0' in data)
        {
            console.log('Element 0 found.');
            document.getElementById('sm0').style.display = 'inline';
            document.getElementById('sm0_label').innerHTML = data[0]['device_name'];

            sm0_V1.set(data[0]['l1_voltage']);
            sm0_V2.set(data[0]['l2_voltage']);
            sm0_V3.set(data[0]['l3_voltage']);
            sm0_A1.set(data[0]['l1_current']);
            sm0_A2.set(data[0]['l2_current']);
            sm0_A3.set(data[0]['l3_current']);
            sm0_AN.set(data[0]['n_current']);
        }
        else
        {
            console.log('Element 0 not found.');
            document.getElementById('sm0').style.display = 'none';
        }

        if('1' in data)
        {
            console.log('Element 1 found.');
            document.getElementById('sm1').style.display = 'inline';
            document.getElementById('sm1_label').innerHTML = data[1]['device_name'];

            sm1_V1.set(data[1]['l1_voltage']);
            sm1_V2.set(data[1]['l2_voltage']);
            sm1_V3.set(data[1]['l3_voltage']);
            sm1_A1.set(data[1]['l1_current']);
            sm1_A2.set(data[1]['l2_current']);
            sm1_A3.set(data[1]['l3_current']);
            sm1_AN.set(data[1]['n_current']);
        }
        else
        {
            console.log('Element 1 not found.');
            document.getElementById('sm1').style.display = 'none';
        }

      });






    //This promise will resolve when 2 seconds have passed
    var timeOutPromise = new Promise(function(resolve, reject) {
      // 2 Second delay
      setTimeout(resolve, 3000, 'Timeout Done');
    });

    Promise.all(
    [networkPromise, timeOutPromise]).then(function(values) {
      console.log("Atleast 3 secs + TTL (Network/server)");
      //Repeat
      callme();
    });
    }
    callme();