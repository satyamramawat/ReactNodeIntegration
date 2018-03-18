 
var StudentAll = React.createClass({ 

  getInitialState: function () {
    return { aadhaar: '',firstname: '',lastname: '',email: '',gender: '',pincode: '',area: '',district: '',dob: '',village: '',city: '',state: '',mobileno: '',username: '',password: '',Buttontxt:'Submit', data1: []};
  },
   handleChange: function(e) {
        this.setState({[e.target.name]: e.target.value});
    },

  componentDidMount() {
 
    $.ajax({
       url: "api/getdata",
       type: "GET",
       dataType: 'json',
       ContentType: 'application/json',
       success: function(data) {         
         this.setState({data1: data}); 
         
       }.bind(this),
       error: function(jqXHR) {
         console.log(jqXHR);
           
       }.bind(this)
    });
  },
  
   handleClick: function() {
 
   var Url="";
   if(this.state.Buttontxt=="Submit"){
      Url="/api/savedata";
       }
      else{
      Url="/api/Updatedata";
      }
      var studentdata = {
        'aadhaar':this.state.aadhaar,
        'firstname':this.state.firstname,
        'lastname':this.state.lastname,
        'email':this.state.email,
        'gender':this.state.gender,
        'pincode':this.state.pincode,
        'area':this.state.area,
        'district':this.state.district,
        'dob':this.state.dob,
        'village':this.state.village,
        'city':this.state.city,
        'state':this.state.state,
        'mobileno':this.state.mobileno,
        'username':this.state.username,
        'password':this.state.password,
    }
    $.ajax({
      url: Url,
      dataType: 'json',
      type: 'POST',
      data: studentdata,
      success: function(data) {       
          alert(data.data);       
          this.setState(this.getInitialState());
          this.componentDidMount();
         
      }.bind(this),
      error: function(xhr, status, err) {
         alert(err);     
      }.bind(this)
    });
  },

  render: function() {
    return ( 
      <div id="login-box">
   <form>
      <div className="left">
      <h1>Sign up here</h1>
       
      <input type="number" value={this.state.aadhaar}  onChange={ this.handleChange }  name="aadhaar" placeholder="Aadhaar Number" />
      <input type="text" value={this.state.firstname} onChange={this.handleChange} name="firstname" placeholder="First Name" />  
    <input type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="E-mail" />
    <input type="text" value={this.state.gender} onChange={this.handleChange} name="gender" placeholder="Gender" /> 

    <input type="number" value={this.state.pincode} onChange={this.handleChange} name="pincode" placeholder="Pin Code" />
    <input type="text" value={this.state.area} onChange={this.handleChange} name="area" placeholder="Area/Street" /> 
    <input type="text" value={this.state.district} onChange={this.handleChange} name="district" placeholder="District" />  
 
    <input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" />
      </div>

      <div className="center">
      <input type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="Username" />
      <input type="text" value={this.state.lastname} onChange={this.handleChange} name="lastname" placeholder="Last Name" />
      <input type="number" value={this.state.mobileno} onChange={this.handleChange} name="mobileno" placeholder="Mobile Number" />
      <input type="date" value={this.state.dob} onChange={this.handleChange} name="dob" placeholder="Date of Birth" />
      <input type="text" value={this.state.village} onChange={this.handleChange} name="village" placeholder="Village" />  
      <input type="text" value={this.state.city} onChange={this.handleChange} name="city" placeholder="City" />  
      <input type="text" value={this.state.state} onChange={this.handleChange} name="state" placeholder="State" />  
      {/* <input type="password" value={this.state.password2} onChange={this.handleChange} name="password2" placeholder="Retype password" /> */}

      <input type="button" value={this.state.Buttontxt} onClick={this.handleClick} />
      </div>
      </form>

      <div className="right">
      <center>
    <span className="loginwith">Share in <br />social networks</span>
    <div className="buttonalignment">
    <button className="social-signin facebook">Log in to facebook</button>
    <button className="social-signin twitter">Log in to Twitter</button>
    <button className="social-signin google">Log in to Google+</button>
    <div className="foot-lnk">
					<a href="#forgot">Already a Member?</a>
				</div>
    </div>
    </center>
  </div>
  
  <div className="or">OR</div>

      </div>
    );
  }
});

ReactDOM.render(<StudentAll  />, document.getElementById('root'))