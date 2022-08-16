
function Contests() {

  let things = []

  return (
    <>    

    <h1 style = {{marginTop: '20px', textAlign: 'center', marginBottom: '10px', fontSize: 'max(5vw, 40px)', textAlign: 'center'}}>Math Contests</h1>
    <h1 style = {{fontSize: 'max(2vw, 20px)', textAlign: 'center', marginBottom: 'max(2vw, 20px)'}}>Recommended math contests for students every year, based on grade</h1>
    
    <h1 style = {{color: '$darkblue', fontSize: 'max(3vw, max(2vw, 20px))', textAlign: 'center', marginTop: '20px', marginBottom: '210px'}}>
      {'Select your\u00A0'}
      <div class="dropdown">
        <button style = {{fontSize: 'max(3vw, max(2vw, 20px))'}} class="dropbtn">grade</button>

        <div class="dropdown-content">
          <a onClick = {
            () => {
              if (things != []) {
                for (let i = 0; i < things.length; i++) {
                  let e = document.getElementById(things[i]);
                  e.style.display = 'none';
                }
              }
              let thing = document.getElementById('eight');
              things.push('eight')
              thing.style.display = 'block'; 
            }
          }>eight</a>
          <a onClick = {
            () => {
              if (things != []) {
                for (let i = 0; i < things.length; i++) {
                  let e = document.getElementById(things[i]);
                  e.style.display = 'none';
                }
              }
              let thing = document.getElementById('nine');
              things.push('nine')
              thing.style.display = 'block';
            }
          }>nine</a>
          <a onClick = {
            () => {
              if (things != []) {
                for (let i = 0; i < things.length; i++) {
                  let e = document.getElementById(things[i]);
                  e.style.display = 'none';
                }
              }
              let thing = document.getElementById('ten');
              things.push('ten')
              thing.style.display = 'block';
            }
          }>ten</a>
          <a onClick = {
            () => {
              if (things != []) {
                for (let i = 0; i < things.length; i++) {
                  let e = document.getElementById(things[i]);
                  e.style.display = 'none';
                }
              }
              let thing = document.getElementById('eleven');
              things.push('eleven')
              thing.style.display = 'block';
            }
          }>eleven</a>
          <a onClick = {
            () => {
              if (things != []) {
                for (let i = 0; i < things.length; i++) {
                  let e = document.getElementById(things[i]);
                  e.style.display = 'none';
                }
              }
              let thing = document.getElementById('twelve');
              things.push('twelve')
              thing.style.display = 'block';
            }
          }>twelve</a>
        </div>

      </div>
      {' :'}
    </h1> 


    <div id = 'eight' style = {{display: 'none'}}>
      <h1 style = {{color: '#51557E', fontSize: '60px', textAlign: 'center', fontWeight: 'lighter', textDecoration: 'underline'}}>Grade 8</h1>
      {/* <div style = {{height: '100vh'}} className = 'vl'></div> */}

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginLeft: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'left'}}>September
        <i class="bi bi-thermometer-half"></i></h1>
        <h1 style = {{fontSize: 'max(2vw, 20px)'}}>Start of the school year</h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginRight: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'right'}}><i class="bi bi-thermometer-low"></i>November</h1>
        <h1 style = {{textAlign: 'right', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/bcc.html'>Beaver Computing Challenge 7/8</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginLeft: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'left'}}>January <i class="bi bi-thermometer-snow"></i></h1>
        <h1 style = {{fontSize: 'max(2vw, 20px)'}}>{'Start of new year\n'}<br></br>
          <a href='https://www.maa.org/math-competitions/amc-8'>AMC 8</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginRight: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'right'}}><i class="bi bi-thermometer-sun"></i>May</h1>
        <h1 style = {{textAlign: 'right', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/gauss.html'>Gauss 7/8</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginLeft: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'left'}}>June <i class="bi bi-thermometer-sun"></i></h1>
        <h1 style = {{fontSize: 'max(2vw, 20px)'}}>{'End of school year\n'}
        </h1>
      </div>
    </div>

    <div id = 'nine' style = {{display: 'none'}}>
      <h1 style = {{color: '#51557E', fontSize: '60px', textAlign: 'center', fontWeight: 'lighter', textDecoration: 'underline'}}>Grade 9</h1>
      {/* <div style = {{height: '60%'}} className = 'vl'></div> */}

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginLeft: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'left'}}>September
        <i class="bi bi-thermometer-half"></i></h1>
        <h1 style = {{fontSize: 'max(2vw, 20px)'}}>Start of the school year</h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginRight: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'right'}}><i class="bi bi-thermometer-low"></i>November</h1>
        <h1 style = {{textAlign: 'right', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/bcc.html'>Beaver Computing - Challenge 9/10</a>
        </h1>
        <h1 style = {{textAlign: 'right', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.maa.org/math-competitions/amc-1012'>AMC 10</a>
        </h1>
        <h1 style = {{textAlign: 'right', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/csimc.html'>CIMC</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginLeft: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'left'}}>January <i class="bi bi-thermometer-snow"></i></h1>
        <h1 style = {{fontSize: 'max(2vw, 20px)'}}>Start of new year</h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginRight: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'right'}}><i class="bi bi-thermometer-snow"></i>February</h1>
        <h1 style = {{textAlign: 'right', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/pcf.html'>Pascal</a>
        </h1>
        <h1 style = {{textAlign: 'right', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/ccc-cco.html'>Canadian Computing Competition Junior</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginLeft: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'left'}}>April<i class="bi bi-thermometer-half"></i></h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/fgh.html'>Fryer</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginRight: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'right'}}>June <i class="bi bi-thermometer-sun"></i></h1>
        <h1 style = {{textAlign: 'right', fontSize: 'max(2vw, 20px)'}}>{'End of school year\n'}
        </h1>
      </div>
    </div>

    <div id = 'ten' style = {{display: 'none'}}>
      <h1 style = {{ color: '#51557E', fontSize: '60px', textAlign: 'center', fontWeight: 'lighter', textDecoration: 'underline'}}>Grade 10</h1>
      {/* <div style = {{height: '60%'}} className = 'vl'></div> */}

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginLeft: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'left'}}>September
        <i class="bi bi-thermometer-half"></i></h1>
        <h1 style = {{fontSize: 'max(2vw, 20px)'}}>Start of the school year</h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginRight: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'right'}}><i class="bi bi-thermometer-low"></i>November</h1>
        <h1 style = {{textAlign: 'right', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/bcc.html'>Beaver Computing - Challenge 9/10</a>
        </h1>
        <h1 style = {{textAlign: 'right', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.maa.org/math-competitions/amc-1012'>AMC 10</a>
        </h1>
        <h1 style = {{textAlign: 'right', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/csimc.html'>CIMC</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginLeft: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'left'}}>January <i class="bi bi-thermometer-snow"></i></h1>
        <h1 style = {{fontSize: 'max(2vw, 20px)'}}>Start of new year</h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginRight: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'right'}}><i class="bi bi-thermometer-snow"></i>February</h1>
        <h1 style = {{textAlign: 'right', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/pcf.html'>Cayley</a>
        </h1>
        <h1 style = {{textAlign: 'right', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/ccc-cco.html'>Canadian Computing Competition Junior</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginLeft: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'left'}}>April<i class="bi bi-thermometer-half"></i></h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/fgh.html'>Galois</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginRight: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'right'}}>June <i class="bi bi-thermometer-sun"></i></h1>
        <h1 style = {{textAlign: 'right', fontSize: 'max(2vw, 20px)'}}>{'End of school year\n'}
        </h1>
      </div>
    </div>

    <div id = 'eleven' style = {{display: 'none'}}>
      <h1 style = {{color: '#51557E', fontSize: '60px', textAlign: 'center', fontWeight: 'lighter', textDecoration: 'underline'}}>Grade 11</h1>
      {/* <div style = {{height: '60%'}} className = 'vl'></div> */}

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginLeft: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'left'}}>September
        <i class="bi bi-thermometer-half"></i></h1>
        <h1 style = {{fontSize: 'max(2vw, 20px)'}}>Start of the school year</h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginRight: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'right'}}><i class="bi bi-thermometer-low"></i>October</h1>
        <h1 style = {{textAlign: 'right', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www2.cms.math.ca/Competitions/COMC/2021/'>Canadian Open Mathematics Challenge</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginLeft: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'left'}}>November<i class="bi bi-thermometer-low"></i></h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.maa.org/math-competitions/amc-1012'>AMC 12</a>
        </h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/csimc.html'>CSMC</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginRight: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'right'}}> <i class="bi bi-thermometer-snow"></i>January</h1>
        <h1 style = {{fontSize: 'max(2vw, 20px)'}}>Start of new year</h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginLeft: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'left'}}>February <i class="bi bi-thermometer-snow"></i></h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/pcf.html'>Fermat</a>
        </h1>
        <h1 style = {{textAlign: 'right', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/ccc-cco.html'>Canadian Computing Competition Senior</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginRight: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'right'}}><i class="bi bi-thermometer-half"></i>April</h1>
        <h1 style = {{textAlign: 'right', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/fgh.html'>Hypatia</a>
        </h1>
        <h1 style = {{textAlign: 'right', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/euclid.html'>Euclid</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginLeft: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'left'}}><i class="bi bi-thermometer-sun"></i>June</h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(2vw, 20px)'}}>{'End of school year\n'}
        </h1>
      </div>
    </div>

    <div id = 'twelve' style = {{display: 'none'}}>
      <h1 style = {{color: '#51557E', fontSize: '60px', textAlign: 'center', fontWeight: 'lighter', textDecoration: 'underline'}}>Grade 12</h1>
      {/* <div style = {{height: '60%'}} className = 'vl'></div> */}

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginLeft: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'left'}}>September
        <i class="bi bi-thermometer-half"></i></h1>
        <h1 style = {{fontSize: 'max(2vw, 20px)'}}>Start of the school year</h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginRight: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'right'}}><i class="bi bi-thermometer-low"></i>October</h1>
        <h1 style = {{textAlign: 'right', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www2.cms.math.ca/Competitions/COMC/2021/'>Canadian Open Mathematics Challenge</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginLeft: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'left'}}>November<i class="bi bi-thermometer-low"></i></h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.maa.org/math-competitions/amc-1012'>AMC 12</a>
        </h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/csimc.html'>CSMC</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginRight: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'right'}}> <i class="bi bi-thermometer-snow"></i>January</h1>
        <h1 style = {{fontSize: 'max(2vw, 20px)'}}>Start of new year</h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginLeft: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'left'}}>February <i class="bi bi-thermometer-snow"></i></h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/ccc-cco.html'>Canadian Computing Competition Senior</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginRight: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'right'}}><i class="bi bi-thermometer-half"></i>April</h1>
        <h1 style = {{textAlign: 'right', fontSize: 'max(2vw, 20px)'}}>
          <a href='https://www.cemc.uwaterloo.ca/contests/euclid.html'>Euclid</a>
        </h1>
      </div>

      <div className = 'container' style = {{width: 'max(30%, 280px)', marginLeft: '200px'}}>
        <h1 style = {{color: '#51557E', fontSize: 'max(3vw, 40px)', textAlign: 'left'}}>June <i class="bi bi-thermometer-sun"></i></h1>
        <h1 style = {{textAlign: 'left', fontSize: 'max(2vw, 20px)'}}>{'End of school year\n'}
        </h1>
      </div>
    </div>

    </>
  );
}

export default Contests;
