(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(58),r=a.n(s),o=(a(68),a(15)),c=a(16),l=a(18),u=a(17),m=a(19),p=a(3),d=a(59),v=a.n(d),h=a(60),g=a.n(h),f=a(61),b=a.n(f),E=a(30),N=a.n(E),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"brand"},i.a.createElement("div",{className:"navBar"},i.a.createElement("img",{id:"Logo",src:b.a,alt:"logo",className:"navLogo"}),i.a.createElement("div",{id:"playerDetail",className:"navs"},i.a.createElement("p",{id:"teamName"},"Team Name:  ",this.props.teamName))),i.a.createElement("div",{className:"headerText"},i.a.createElement("p",{style:{fontSize:20}},"Hello! welcome to"),i.a.createElement("img",{src:N.a,alt:"HackGrid",id:"headLogo"}),i.a.createElement("p",{style:{fontSize:17}},"By Apple Developers Group")))}}]),t}(n.Component),w=a(62),k=a.n(w),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){a.liveQuestionSetter(),a.setState({loading:!0}),a.props.firebaseRef.on("value",function(e){if(e.exists()){if(a.setState({liveQuestion:e.val().liveQuestion}),a.currentQuestion(),p.database().ref("players/".concat(a.props.teamName)).once("value",function(e){a.setState({counter:e.val().counter})}),1===e.val().globalCounter&&2===a.state.counter)a.setState({afterAns:!1}),a.props.database.ref("players/".concat(a.props.teamName)).child("counter").set(0);if(0===a.state.counter)var t=15,n=0,i=setInterval(function(){t-=1,(n+=6.666666666666667)>99&&(s(),a.setState({counter:2})),t<10&&(t="0"+t),a.setState({timer:t,percentage:n})},1e3),s=function(){clearInterval(i)};a.setState({loading:!1})}}),a.props.database.ref("players/".concat(a.props.teamName)).once("value",function(e){2===e.val().counter&&(a.setState({afterAns:!0,counter:2}),console.log(a.state.counter))})},a.state={percentage:0,timer:"15",liveQuestion:0,question:"",correctAnswer:"",optiona:"",optionb:"",optionc:"",optiond:"",answer:"",counter:1,score:0,loading:!1,killtime:!1,afterAns:"false"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"optionUpdate",value:function(e,t){var a,n,i,s,r=this.props.database.ref("question/q".concat(e));r.once("value",function(e){a=e.val().optionACounter,n=e.val().optionBCounter,i=e.val().optionCCounter,s=e.val().optionDCounter}),"a"===t&&(a+=1,r.child("optionACounter").set(a)),"b"===t&&(n+=1,r.child("optionBCounter").set(n)),"c"===t&&(i+=1,r.child("optionCCounter").set(i)),"d"===t&&(s+=1,r.child("optionDCounter").set(s))}},{key:"hitTimer",value:function(e){}},{key:"currentQuestion",value:function(){var e,t,a,n,i,s;this.props.database.ref("question/q".concat(this.state.liveQuestion)).once("value",function(r){e=r.val().q,t=r.val().a,a=r.val().optionA,n=r.val().optionB,i=r.val().optionC,s=r.val().optionD}),this.setState({question:e,correctAnswer:t,optiona:a,optionb:n,optionc:i,optiond:s})}},{key:"check",value:function(e){var t=this,a=e.target.id;this.setState({answer:a}),this.props.firebaseRef.once("value",function(e){var n,i,s=t.state.correctAnswer;if(t.setState({liveQuestion:e.val().liveQuestion}),t.props.database.ref("players/".concat(t.props.teamName)).once("value",function(e){n=e.val().score,i=e.val().counter}),2!==i&&t.props.firebaseRef.once("value",function(e){t.setState({liveQuestion:e.val().liveQuestion}),t.optionUpdate(t.state.liveQuestion,a)}),s===a&&2!==i){var r=e.val().timeStamp,o=(new Date).getTime(),c=Math.round((o-r)/1e3),l=n+(50-c);p.database().ref("players/".concat(t.props.teamName)).child("score").set(l)}p.database().ref("players/".concat(t.props.teamName)).child("counter").set(2)})}},{key:"liveQuestionSetter",value:function(){var e=this;this.props.firebaseRef.once("value",function(t){var a=t.val().liveQuestion;e.setState({liveQuestion:a}),e.currentQuestion()})}},{key:"renderTimer",value:function(){return 2!==this.state.counter?i.a.createElement(g.a,{className:"timerCircle",percentage:this.state.percentage,text:i.a.createElement("tspan",{dx:-25,dy:6},"00:",this.state.timer),background:"true",backgroundPadding:0,strokeWidth:5,styles:{root:{},path:{stroke:"rgba(250, 0, 250, ".concat(1,")"),strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s"},trail:{stroke:"#d6d6d6"},text:{fill:"#34c",fontSize:"20px"},background:{fill:"white"}}}):i.a.createElement("div",null)}},{key:"renderQuestion",value:function(){return 2===this.state.counter?i.a.createElement("div",null,i.a.createElement("img",{id:"waitImg",src:k.a,alt:"namilehai"})):i.a.createElement("div",null,i.a.createElement("p",{className:"Question"},this.state.question),i.a.createElement("br",null),i.a.createElement("div",{id:"options",className:"Options text-center"},i.a.createElement("div",{className:"row container optionGrp justify-content-center "},i.a.createElement("div",{id:"a",className:"tag col-lg-5 text-center",onClick:this.check.bind(this)},this.state.optiona),i.a.createElement("div",{id:"b",className:"tag col-lg-5 text-center",onClick:this.check.bind(this)},this.state.optionb)),i.a.createElement("br",null),i.a.createElement("div",{className:"row container optionGrp justify-content-center",id:"options"},i.a.createElement("div",{id:"c",className:"tag col-lg-5",onClick:this.check.bind(this)},this.state.optionc),i.a.createElement("div",{id:"d",className:"tag col-lg-5",onClick:this.check.bind(this)},this.state.optiond))))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(y,{teamName:this.props.teamName,participantName:this.props.participantName}),i.a.createElement("div",{className:"QuestionPage container"},i.a.createElement("div",{className:"text-centre justify-content-center row"},i.a.createElement("p",{className:"questionNumber tag",style:{justifyContent:"center"}},"Quesetion ",this.state.liveQuestion," of 10")),i.a.createElement("br",null),this.renderQuestion(),i.a.createElement("br",null),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-5"}),i.a.createElement("div",{className:"timer col-sm-4"},this.renderTimer()))))}}]),t}(n.Component);a(147);p.initializeApp({apiKey:"AIzaSyBPLVDzn-VHltDnx-dL1e_M_cPIQQqr8P4",authDomain:"adgquiz.firebaseapp.com",databaseURL:"https://adgquiz.firebaseio.com",projectId:"adgquiz",storageBucket:"adgquiz.appspot.com",messagingSenderId:"838063692472"});var C=p.database().ref("players"),O=p.database().ref(),Q=p.database(),j=p.database().ref("question"),q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onPressRegisterButton=function(e){if(e.preventDefault(),a.setState({teamName:document.getElementById("TeamName").value,password:document.getElementById("password").value}),!1===a.state.registered)C.child(a.state.teamName).set({password:a.state.password,score:0,counter:0}),a.setState({registered:!0});else{var t=a.state.password,n="";p.database().ref("players/".concat(a.state.teamName)).once("value",function(e){n=e.val().password,t===n&&a.setState({loggedIn:!0})})}},a.state={loadingSignUp:!1,registered:!1,loggedIn:!1,teamName:"",password:"",participantName:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderRegisterOrQuiz",value:function(){return this.state.loggedIn?i.a.createElement("div",null," ",i.a.createElement(S,{teamName:this.state.teamName,participantName:this.state.participantName,database:Q,user:C,firebaseRef:O,questions:j})):i.a.createElement("form",{id:"regDeco",className:"register",onSubmit:this.onPressRegisterButton.bind(this),autoComplete:"off"},i.a.createElement("div",{className:"text-center"},i.a.createElement("img",{src:N.a,alt:"logo",id:"reglogo"}),i.a.createElement("h1",null,"Quiz")),this.register())}},{key:"teamNameOnChange",value:function(e){var t=this;this.setState({teamName:e.target.value,loadingSignUp:!0}),C.once("value",function(e){var a=Object.keys(e.val()).includes(t.state.teamName);t.setState({loadingSignUp:!1}),a?t.setState({registered:!0}):t.setState({registered:!1})})}},{key:"participantNameOnChange",value:function(e){this.setState({participantName:e.target.value})}},{key:"passwordOnChange",value:function(e){this.setState({password:document.getElementById("password").value})}},{key:"loginOrRegister",value:function(){return!1===this.state.registered?i.a.createElement("div",null,i.a.createElement("input",{type:"password",id:"password",className:"",name:"login",placeholder:"password",value:this.state.password,onChange:this.passwordOnChange.bind(this),required:!0}),i.a.createElement("br",null),i.a.createElement("input",{className:"btn btn-primary",id:"rButton",type:"submit",value:"Register"})):i.a.createElement("div",null,i.a.createElement("input",{type:"password",id:"password",className:"",name:"login",placeholder:"password",value:this.state.password,onChange:this.passwordOnChange.bind(this),required:!0}),i.a.createElement("p",{style:{color:"blue"}},"Registered"),i.a.createElement("br",null),i.a.createElement("input",{className:"btn btn-primary",id:"rButton",type:"submit",value:"Log In"}))}},{key:"spinner",value:function(){if(this.state.loadingSignUp)return i.a.createElement(v.a,{type:"TailSpin",color:"#00BFFF",height:"55",width:"55"})}},{key:"register",value:function(){return i.a.createElement("div",{className:"registerCard container"},i.a.createElement("input",{type:"text",id:"TeamName",className:"",name:"login",placeholder:"Team Name",value:this.state.teamName+"",autoComplete:"off",onChange:this.teamNameOnChange.bind(this),required:!0}),this.loginOrRegister())}},{key:"render",value:function(){return i.a.createElement("div",{className:"App "},this.renderRegisterOrQuiz(),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{id:"loader",className:"text-center"},this.spinner()))}}]),t}(n.Component);a(148),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},30:function(e,t,a){e.exports=a.p+"static/media/hackgridLogo.a80bfdd5.png"},61:function(e,t,a){e.exports=a.p+"static/media/Logo.182b63bb.png"},62:function(e,t,a){e.exports=a.p+"static/media/quiz.eca3a5d8.png"},63:function(e,t,a){e.exports=a(149)},68:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.055b4337.chunk.js.map