document.getElementById('button').
            addEventListener('click', convert, false);
            
            
            function convert() {
                var degC = document.getElementById('cValue').value;
                var degF = (1.8 * degC) + (32);
            document.getElementById('fValue').innerHTML  = degF + '°F';
            
            }