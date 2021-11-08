//
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
            labels: [0, 127000, 220000, 250000],  // Print labels at these values
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
            labels: [0, 1000, 4000, 5000],  // Print labels at these values
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

    // Guage V1
    var V1 = new Gauge(
        document.getElementById("V1"), {
          label: function(value) {
            return value;
          }
        }
    ).setOptions(opts); // create sexy gauge!
    V1.setTextField(document.getElementById("V1_textfield"));
    V1.maxValue = 250000; // set max gauge value
    V1.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    V1.animationSpeed = 50; // set animation speed (32 is default value)
    V1.set(0); // set actual value

    var V2 = new Gauge(
        document.getElementById("V2"), {
          label: function(value) {
            return value;
          }
        }
    ).setOptions(opts); // create sexy gauge!
    V2.setTextField(document.getElementById("V2_textfield"))
    V2.maxValue = 250000; // set max gauge value
    V2.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    V2.animationSpeed = 50; // set animation speed (32 is default value)
    V2.set(0); // set actual value

    var V3 = new Gauge(
        document.getElementById("V3"), {
          label: function(value) {
            return value;
          }
        }
    ).setOptions(opts); // create sexy gauge!
    V3.setTextField(document.getElementById("V3_textfield"))
    V3.maxValue = 250000; // set max gauge value
    V3.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    V3.animationSpeed = 50; // set animation speed (32 is default value)
    V3.set(0); // set actual value

    var A1 = new Gauge(
        document.getElementById("A1"), {
          label: function(value) {
            return value;
          }
        }
    ).setOptions(opts_current); // create sexy gauge!
    A1.setTextField(document.getElementById("A1_textfield"))
    A1.maxValue = 5000; // set max gauge value
    A1.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    A1.animationSpeed = 50; // set animation speed (32 is default value)
    A1.set(0); // set actual value

    var A2 = new Gauge(
        document.getElementById("A2"), {
          label: function(value) {
            return value;
          }
        }
    ).setOptions(opts_current); // create sexy gauge!
    A2.setTextField(document.getElementById("A2_textfield"))
    A2.maxValue = 5000; // set max gauge value
    A2.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    A2.animationSpeed = 50; // set animation speed (32 is default value)
    A2.set(0); // set actual value

    var A3 = new Gauge(
        document.getElementById("A3"), {
          label: function(value) {
            return value;
          }
        }
    ).setOptions(opts_current); // create sexy gauge!
    A3.setTextField(document.getElementById("A3_textfield"))
    A3.maxValue = 5000; // set max gauge value
    A3.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    A3.animationSpeed = 50; // set animation speed (32 is default value)
    A3.set(0); // set actual value

    var AN = new Gauge(
        document.getElementById("AN"), {
          label: function(value) {
            return value;
          }
        }
    ).setOptions(opts_current); // create sexy gauge!
    AN.setTextField(document.getElementById("AN_textfield"))
    AN.maxValue = 5000; // set max gauge value
    AN.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    AN.animationSpeed = 50; // set animation speed (32 is default value)
    AN.set(0); // set actual value


    function callme(){
    //This promise will resolve when the network call succeeds
    //Feel free to make a REST fetch using promises and assign it to networkPromise
    var networkPromise = fetch('/get_server_data')
      .then(response => response.json())
      .then(data => {
        console.log(data);

        document.getElementById('sm_0_label').innerHTML = data[0]['device_name'];

        console.log(data[0]['l1_voltage']);
        V1.set(data[0]['l1_voltage']);

        console.log(data[0]['l2_voltage']);
        V2.set(data[0]['l2_voltage']);

        console.log(data[0]['l3_voltage']);
        V3.set(data[0]['l3_voltage']);

        console.log(data[0]['l1_current']);
        A1.set(data[0]['l1_current']);

        console.log(data[0]['l2_current']);
        A2.set(data[0]['l2_current']);

        console.log(data[0]['l3_current']);
        A3.set(data[0]['l3_current']);

        console.log(data[0]['n_current']);
        AN.set(data[0]['n_current']);

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