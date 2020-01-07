document.getElementById('button').
            addEventListener('click', convert, false);
            
            
            function convert() {
                var degF = document.getElementById('fValue').value;
                var degC = (degF - 32) * (5/9);
            document.getElementById('cValue').innerHTML  = degC + '°C';
            
            }




