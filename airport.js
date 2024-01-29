initMap();
		var airports = [
            {
                icao: 'VTBD',
                coordinates: [13.912386, 100.604047],
                popupContent: 'VTBD - Loading METAR data...'
            },
            {
                icao: 'VTBS',
                coordinates: [13.692419, 100.750497],
                popupContent: 'VTBS - Loading METAR data...'
            },
            {
                icao: 'VTBU',
                coordinates: [12.679722, 101.005],
                popupContent: 'VTSM - Loading METAR data...'
            },
            {
                icao: 'VTCC',
                coordinates: [18.768994, 98.967936],
                popupContent: 'VTCC - Loading METAR data...'
            },
            {
                icao: 'VTCT',
                coordinates: [19.954286, 99.879144],
                popupContent: 'VTCT - Loading METAR data...'
            },
            {
                icao: 'VTSG',
                coordinates: [8.098756, 98.982756],
                popupContent: 'VTSG - Loading METAR data...'
            },
            {
                icao: 'VTSP',
                coordinates: [8.105342, 98.305611],
                popupContent: 'VTSP - Loading METAR data...'
            },
            {
                icao: 'VTSS',
                coordinates: [6.936472, 100.393722],
                popupContent: 'VTSS - Loading METAR data...'
            },
            {
                icao: 'VTSM',
                coordinates: [9.547778, 100.062222],
                popupContent: 'VTSM - Loading METAR data...'
            },
            {
                icao: 'VTSB',
                coordinates: [9.134375, 99.142483],
                popupContent: 'VTSB - Loading METAR data...'
            },
            {
                icao: 'VTUD',
                coordinates: [17.386886, 102.775731],
                popupContent: 'VTUD - Loading METAR data...'
            },
            {
                icao: 'VTSY',
                coordinates: [5.786475, 101.147289],
                popupContent: 'VTSY - Loading METAR data...'
            },
            {
                icao: 'VTUO',
                coordinates: [15.227897, 103.248633],
                popupContent: 'VTUO - Loading METAR data...'
            },
            {
                icao: 'VTSE',
                coordinates: [10.714492, 99.358942],
                popupContent: 'VTSE - Loading METAR data...'
            },
            {
                icao: 'VTPH',
                coordinates: [12.628219, 99.952761],
                popupContent: 'VTPE - Loading METAR data...'
            },
            {
                icao: 'VTUK',
                coordinates: [16.464431, 102.786606],
                popupContent: 'VTUK - Loading METAR data...'
            },
            {
                icao: 'VTCL',
                coordinates: [18.277569, 99.505611],
                popupContent: 'VTCL - Loading METAR data...'
            },
            {
                icao: 'VTUL',
                coordinates: [17.445722, 101.726514],
                popupContent: 'VTUL - Loading METAR data...'
            },
            {
                icao: 'VTCH',
                coordinates: [19.300533, 97.975192],
                popupContent: 'VTCH - Loading METAR data...'
            },
            {
                icao: 'VTCS',
                coordinates: [18.177908, 97.930517],
                popupContent: 'VTCS - Loading METAR data...'
            },
            {
                icao: 'VTPM',
                coordinates: [16.702453, 98.5456],
                popupContent: 'VTPM - Loading METAR data...'
            },
            {
                icao: 'VTUW',
                coordinates: [17.386564, 104.660506],
                popupContent: 'VTUW - Loading METAR data...'
            },
            {
                icao: 'VTUQ',
                coordinates: [14.953694, 102.311481],
                popupContent: 'VTUQ - Loading METAR data...'
            },
            {
                icao: 'VTSF',
                coordinates: [8.539944, 99.940308],
                popupContent: 'VTSF - Loading METAR data...'
            },
            {
                icao: 'VTCN',
                coordinates: [18.802722, 100.784811],
                popupContent: 'VTCN - Loading METAR data...'
            },
            {
                icao: 'VTSC',
                coordinates: [6.523053, 101.748658],
                popupContent: 'VTSC - Loading METAR data...'
            },
            {
                icao: 'VTCI',
                coordinates: [19.370431, 98.435947],
                popupContent: 'VTCI - Loading METAR data...'
            },
            {
                icao: 'VTSK',
                coordinates: [6.785044, 101.147647],
                popupContent: 'VTSK - Loading METAR data...'
            },
            {
                icao: 'VTPB',
                coordinates: [16.675933, 101.1906],
                popupContent: 'VTPB - Loading METAR data...'
            },
            {
                icao: 'VTPP',
                coordinates: [16.771658, 100.281628],
                popupContent: 'VTPP - Loading METAR data...'
            },
            {
                icao: 'VTCP',
                coordinates: [18.131722, 100.162353],
                popupContent: 'VTCP - Loading METAR data...'
            },
            {
                icao: 'VTSR',
                coordinates: [9.773817, 98.587306],
                popupContent: 'VTSR - Loading METAR data...'
            },
            {
                icao: 'VTUV',
                coordinates: [16.1094, 103.782514],
                popupContent: 'VTUV - Loading METAR data...'
            },
            {
                icao: 'VTUI',
                coordinates: [17.196672, 104.116531],
                popupContent: 'VTUI - Loading METAR data...'
            },
            {
                icao: 'VTPO',
                coordinates: [17.232467, 99.820461],
                popupContent: 'VTPO - Loading METAR data...'
            },
            {
                icao: 'VTPT',
                coordinates: [16.898189, 99.25375],
                popupContent: 'VTPT - Loading METAR data...'
            },
            {
                icao: 'VTST',
                coordinates: [7.511319, 99.615317],
                popupContent: 'VTST - Loading METAR data...'
            },
            {
                icao: 'VTBO',
                coordinates: [12.281097, 102.324372],
                popupContent: 'VTBO - Loading METAR data...'
            },
            {
                icao: 'VTUU',
                coordinates: [15.247083, 104.870433],
                popupContent: 'VTUU - Loading METAR data...'
            },

        ];

        // Loop through the array and add markers with popups
        airports.forEach(function (airport) {
            var marker = L.marker(airport.coordinates);
            marker.bindPopup(airport.popupContent);
            marker.addTo(map);
            // Event listener when the popup is opened
            marker.on('popupopen', function () {
                // Fetch METAR data when the popup is opened
                $.ajax({
                    url: 'https://api.met.no/weatherapi/tafmetar/1.0/metar.txt?icao=' + airport.icao,
                    type: 'GET',
                    dataType: 'text',
                    success: function (data) {
                        const trimmedData = data.trim(); // Remove leading and trailing whitespaces
                        const dataArray = trimmedData.split('\n');
                        //console.log(dataArray[dataArray.length - 1]); // Access the last element correctly
                        marker.setPopupContent(dataArray[dataArray.length - 1]);
                    },
                    error: function (error) {
                        console.error('Failed to fetch METAR data:', error);
                        // Display an error message if fetching fails
                        marker.setPopupContent('<pre>Failed to fetch METAR data</pre>');
                    }
                });
            });
        });
