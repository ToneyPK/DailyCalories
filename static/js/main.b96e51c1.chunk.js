(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,a,t){},133:function(e,a,t){},141:function(e,a,t){},142:function(e,a,t){},148:function(e,a,t){},150:function(e,a,t){},155:function(e,a,t){},169:function(e,a,t){},170:function(e,a,t){},171:function(e,a,t){},172:function(e,a,t){},174:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(20),c=t.n(o),s=(t(98),t(11)),l=t(12),i=t(14),u=t(13),d=t(15),m=t(61),p=t(33),f=t(87),h=function(e){var a=e.component,t=e.authed,n=Object(f.a)(e,["component","authed"]);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return t?r.a.createElement(a,e):r.a.createElement(p.a,{to:"/login"})}}))};var y=t(23),v=t(10),b=t.n(v),E=t(29),g="LOGIN_USER",O="GET_ACTIVE_USER",j="AUTHENTICATION_ERROR",w="LOGIN_SUCCESS",C="LOGOUT_USER",k="LOGOUT_SUCCESS",D="https://secret-ridge-01197.herokuapp.com",N=t(30),S=t.n(N),I=t(24),U=Object(I.a)();var _=function(){setTimeout(function(){localStorage.removeItem("token"),U.push("/login")},36e5)};function A(){return function(){var e=Object(E.a)(b.a.mark(function e(a){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(D,"/user"),{headers:{Authorization:"".concat(localStorage.getItem("token"))}});case 3:t=e.sent,a({type:w}),a({type:O,payload:t.data}),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}},e,null,[[0,8]])}));return function(a){return e.apply(this,arguments)}}()}var T=t(64),L=t.n(T),x=t(179),G=t(180),F=t(181),R=t(186),M=(t(121),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props,a=e.caloriesIn,t=e.activeUser,n=t.caloriesGoal,o=function(e,a){return Math.floor(e/a*100)}(a,n),c=t.username+", keep eating to reach your goal.";return r.a.createElement(x.a,null,r.a.createElement(G.a,null,r.a.createElement(F.a,null,r.a.createElement(L.a,{variant:"info"},"Calories in: ",a," kcal")),r.a.createElement(F.a,null,r.a.createElement(L.a,{variant:o>=100?"success":"danger"},r.a.createElement("span",null,"Goal: ",r.a.createElement("span",null,n," kcal"))))),r.a.createElement(R.a,{variant:o>=100&&o<130?(c="Congratulations "+t.username+" You have reached the goal.","success"):o>=130?(c="Careful "+t.username+"! You had too much food today.","danger"):"info",className:"progressBar",now:o,label:o+"%"}),r.a.createElement("p",null,c))}}]),a}(n.Component)),Y=t(31),B=t(89),z=t.n(B),P=t(44),X=t.n(P),V=t(8),K=t.n(V),H=t(185),J=(t(133),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={foodName:"",foodCalories:0,error:""},t.onSubmit=function(e){e.preventDefault();var a=t.props.dayId,n={foodName:t.state.foodName,foodCalories:t.state.foodCalories,dayId:a};""===t.state.foodName?t.setState({error:"Name field cannot be empty."}):(t.props.addFood(n),t.props.addDayCaloriesIn(n),t.setState({foodName:"",foodCalories:0,error:""}))},t.onChange=function(e){return t.setState(Object(Y.a)({},e.target.name,e.target.value))},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(K.a,{onSubmit:this.onSubmit},r.a.createElement(z.a,null,r.a.createElement(X.a,null,r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"Food Name:"),r.a.createElement(K.a.Control,{value:this.state.foodName,type:"text",name:"foodName",onChange:this.onChange}),r.a.createElement("span",null,this.state.error))),r.a.createElement(X.a,null,r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"Calories (kcal):"),r.a.createElement(K.a.Control,{value:this.state.foodCalories,type:"number",name:"foodCalories",onChange:this.onChange}))),r.a.createElement(X.a,null,r.a.createElement(H.a,{variant:"success",block:!0,type:"submit",className:"addFoodBtn"},"Add"))))}}]),a}(n.Component)),W=Object(y.b)(null,{addFood:function(e){return function(){var a=Object(E.a)(b.a.mark(function a(t){var n,r;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n={foodName:e.foodName,calories:e.foodCalories,dayId:e.dayId},a.prev=1,a.next=4,S.a.post("".concat(D,"/food"),n,{headers:{Authorization:"".concat(localStorage.getItem("token"))}});case 4:r=a.sent,t({type:"ADD_FOOD",payload:r.data}),a.next=10;break;case 8:a.prev=8,a.t0=a.catch(1);case 10:case"end":return a.stop()}},a,null,[[1,8]])}));return function(e){return a.apply(this,arguments)}}()},addDayCaloriesIn:function(e){return function(){var a=Object(E.a)(b.a.mark(function a(t){return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t({type:"ADD_CALORIES",payload:e});case 1:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(J),$=t(182),q=(t(141),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).deleteFood=function(e){t.props.deleteFoodById(e.id),t.props.subtractDayCaloriesIn(e)},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getFood()}},{key:"render",value:function(){var e=this,a=this.props,t=a.dayId,n=a.food;return r.a.createElement("div",null,r.a.createElement($.a,null,r.a.createElement("tbody",null,n.map(function(a){return a.dayId===t?r.a.createElement("tr",{key:a.id},r.a.createElement("td",{className:"border-right"},r.a.createElement("label",null,a.foodName)),r.a.createElement("td",{className:"caloriesTd"},r.a.createElement("label",null,a.calories," kcal")),r.a.createElement("td",{className:"removeFoodBtnTd"},r.a.createElement(H.a,{className:"removeFoodBtn",variant:"danger",onClick:function(){return e.deleteFood(a)}},"X"))):console.log("Food with Day id:"+t+" is not found")}))))}}]),a}(n.Component)),Q=Object(y.b)(function(e){return{food:e.food.food}},{getFood:function(){return function(){var e=Object(E.a)(b.a.mark(function e(a){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("".concat(D,"/food/user"),{headers:{Authorization:"".concat(localStorage.getItem("token"))}});case 2:t=e.sent,a({type:"GET_FOOD",payload:t.data});case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()},deleteFoodById:function(e){return function(){var a=Object(E.a)(b.a.mark(function a(t){var n;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,S.a.delete("".concat(D,"/food/").concat(e),{headers:{Authorization:"".concat(localStorage.getItem("token"))}});case 2:n=a.sent,t({type:"DELETE_FOOD",payload:n.data});case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},subtractDayCaloriesIn:function(e){return function(){var a=Object(E.a)(b.a.mark(function a(t){return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t({type:"SUBTRACT_CALORIES",payload:e});case 1:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(q),Z=t(48),ee=t.n(Z),ae=t(49),te=t.n(ae),ne=(t(142),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.dayId;return r.a.createElement("div",null,r.a.createElement(ee.a,{defaultActiveKey:"1"},r.a.createElement(te.a,null,r.a.createElement(ee.a.Toggle,{as:te.a.Header,eventKey:"0"},"Add Food"),r.a.createElement(ee.a.Collapse,{eventKey:"0"},r.a.createElement(te.a.Body,null,r.a.createElement(W,{dayId:e}))))),r.a.createElement(Q,{dayId:e}))}}]),a}(n.Component)),re=(t(148),t(50)),oe=t.n(re),ce=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).getDate=function(e){return oe()(e).format("MMMM Do YYYY")===oe()().format("MMMM Do YYYY")?"Today":oe()(e).format("MMMM Do YYYY")},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.day,a=e.id,t=e.date,n=e.caloriesIn,o=this.props.activeUser;return console.log(),r.a.createElement("div",null,r.a.createElement(G.a,{className:"dayNavigation"},r.a.createElement(F.a,null,r.a.createElement("h3",null,this.getDate(t)))),r.a.createElement(M,{caloriesIn:n,activeUser:o}),r.a.createElement(ne,{dayId:a}))}}]),a}(n.Component),se=t(65),le=t.n(se),ie=(t(150),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getActiveUser()}},{key:"componentDidUpdate",value:function(e){if(this.props.activeUser!==e.activeUser){var a=this.props.activeUser.id;this.props.getDays(a)}}},{key:"render",value:function(){var e=this.props,a=e.days,t=e.activeUser;return r.a.createElement(r.a.Fragment,null,r.a.createElement(le.a,{wrap:!1,indicators:!1,interval:null},a.map(function(e){return r.a.createElement(le.a.Item,{key:e.id},r.a.createElement(ce,{key:e.id,day:e,activeUser:t}))})))}}]),a}(n.Component)),ue=Object(y.b)(function(e){return{days:e.days.days,activeUser:e.users.activeUser}},{getDays:function(e){return function(){var a=Object(E.a)(b.a.mark(function a(t){var n;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,S.a.get("".concat(D,"/days/user/").concat(e),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:n=a.sent,t({type:"GET_DAYS",payload:n.data});case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},getActiveUser:A})(ie),de=t(184),me=t(183),pe=(t(155),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(x.a,{className:"container"},r.a.createElement(G.a,null,r.a.createElement(F.a,null,r.a.createElement("h1",null,r.a.createElement("span",{className:"titleDailyPart"},"Daily"),"Calories")),r.a.createElement(F.a,{className:"logoutCol"},r.a.createElement(H.a,{className:"logoutButton",onClick:function(){e.props.logOutUser()}},"Logout"),r.a.createElement(de.a,{placement:"bottom",delay:{hide:400},overlay:r.a.createElement(me.a,null,"A new day will be automatically created for the next day.")},r.a.createElement("i",{className:"fas fa-info-circle fa-2x"})))),r.a.createElement("hr",null))}}]),a}(n.Component)),fe=Object(y.b)(function(e){return{auth:e.auth}},{logOutUser:function(){return function(){var e=Object(E.a)(b.a.mark(function e(a){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{localStorage.removeItem("token"),U.push("/login"),a({type:C}),a({type:k})}catch(t){}case 1:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()}})(pe),he=(t(169),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(x.a,{className:"dashboardContainer"},r.a.createElement(fe,null),r.a.createElement(ue,null))}}]),a}(n.Component)),ye=t(46),ve=t.n(ye),be=(t(170),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={username:"",password:"",error:""},t.onSubmit=function(e){e.preventDefault();var a=t.state,n=a.username,r=a.password;t.props.loginUser(n,r),t.setState({username:"",password:""})},t.getError=function(){if(""===t.state.error){var e=t.props.error;""!==e&&t.setState({error:e})}},t.onChange=function(e){return t.setState(Object(Y.a)({},e.target.name,e.target.value))},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidUpdate",value:function(){this.getError()}},{key:"render",value:function(){var e=this.state,a=e.username,t=e.password;return r.a.createElement(x.a,{className:"loginContainer"},r.a.createElement("h1",{className:"mainTitle"},r.a.createElement("span",{className:"titleDailyPart"},"Daily"),"Calories"),r.a.createElement("h3",{className:"subtitle"},"Login:"),r.a.createElement(K.a,{className:"loginForm",onSubmit:this.onSubmit},r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Control,{type:"text",name:"username",placeholder:"username",onChange:this.onChange,value:a})),r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Control,{type:"password",name:"password",placeholder:"password",onChange:this.onChange,value:t})),r.a.createElement(ve.a,{className:"loginButton",size:"lg",variant:"primary",type:"submit"},"Login"),r.a.createElement("span",{className:"error"},this.state.error)),r.a.createElement("a",{className:"registerLink",href:"/register"},"Not registered? Click here to register now."))}}]),a}(n.Component)),Ee=Object(y.b)(function(e){return{activeUser:e.users.activeUser,error:e.users.error}},{loginUser:function(e,a){return function(){var t=Object(E.a)(b.a.mark(function t(n){var r;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.post("".concat(D,"/login"),{username:e,password:a});case 3:r=t.sent,n({type:g}),n({type:w}),localStorage.setItem("token",r.headers.authorization),U.push("/"),_(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:j,payload:"Invalid username or password"});case 14:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()},getActiveUser:A})(be),ge=(t(171),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={username:"",password:"",passwordTwo:"",caloriesGoal:"",errors:{}},t.onSubmit=function(e){e.preventDefault();var a=t.state,n=a.username,r=a.password,o=a.passwordTwo,c=a.caloriesGoal;if(r!==o)t.setState({errors:{password:"Passwords must match!"}});else if(""===r||""===o)t.setState({errors:{password:"Password fields cannot be empty!"}});else if(r.length<6||o.length<6)t.setState({errors:{password:"Password must be longer than 6 characters!"}});else{var s={username:n,password:r,caloriesGoal:c};t.props.addUser(s),t.setState({username:"",password:"",passwordTwo:"",caloriesGoal:0,errors:{}}),window.location.href="/login"}},t.onChange=function(e){return t.setState(Object(Y.a)({},e.target.name,e.target.value))},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.state,a=e.username,t=e.password,n=e.passwordTwo,o=e.caloriesGoal,c=e.errors;return r.a.createElement(x.a,{className:"registerContainer"},r.a.createElement("h1",{className:"mainTitle"},r.a.createElement("span",{className:"titleDailyPart"},"Daily"),"Calories"),r.a.createElement("h3",{className:"subtitle"},"Register:"),r.a.createElement(K.a,{className:"registerForm",onSubmit:this.onSubmit},r.a.createElement(G.a,null,r.a.createElement(F.a,null,r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,{className:"loginLabels"},"Username:"),r.a.createElement(K.a.Control,{name:"username",value:a,onChange:this.onChange,type:"text"}))),r.a.createElement(F.a,null,r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,{className:"loginLabels"},"Daily Calories Goal:"),r.a.createElement(K.a.Control,{name:"caloriesGoal",value:o,onChange:this.onChange,type:"number"})))),r.a.createElement(G.a,null,r.a.createElement(F.a,null,r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,{className:"loginLabels"},"Password:"),r.a.createElement(K.a.Control,{name:"password",value:t,onChange:this.onChange,type:"password"}))),r.a.createElement(F.a,null,r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,{className:"loginLabels"},"Repeat Password:"),r.a.createElement(K.a.Control,{name:"passwordTwo",value:n,onChange:this.onChange,type:"password"})))),r.a.createElement("p",null,c.password),r.a.createElement(ve.a,{className:"loginButton",size:"lg",variant:"primary",type:"submit"},"Register")),r.a.createElement("a",{className:"registerLink",href:"/login"},"Already registered? Click here to log in now."))}}]),a}(n.Component)),Oe=Object(y.b)(null,{addUser:function(e){return function(){var a=Object(E.a)(b.a.mark(function a(t){var n;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,S.a.post("".concat(D,"/users"),e);case 2:n=a.sent,t({type:"ADD_USER",payload:n.data});case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(ge),je=t(32),we=t(92),Ce=t(47),ke=t(18),De={food:[]},Ne={days:[]},Se={users:[],activeUser:{},error:""},Ie={loggedIn:!1},Ue=Object(je.c)({food:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_FOOD":return Object(ke.a)({},e,{food:a.payload});case"ADD_FOOD":return Object(ke.a)({},e,{food:[].concat(Object(Ce.a)(e.food),[a.payload])});case"DELETE_FOOD":return Object(ke.a)({},e,{food:e.food.filter(function(e){return e.id!==a.payload.id})});default:return e}},days:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_DAYS":return Object(ke.a)({},e,{days:a.payload});case"ADD_CALORIES":return Object(ke.a)({},e,{days:e.days.map(function(e){var t=parseInt(a.payload.foodCalories);return e.id===a.payload.dayId?Object(ke.a)({},e,{caloriesIn:t+e.caloriesIn}):e})});case"SUBTRACT_CALORIES":return Object(ke.a)({},e,{days:e.days.map(function(e){var t=parseInt(a.payload.calories);return e.id===a.payload.dayId?Object(ke.a)({},e,{caloriesIn:e.caloriesIn-t}):e})});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_USER":return Object(ke.a)({},e,{users:[a.payload].concat(Object(Ce.a)(e.users))});case g:return Object(ke.a)({},e,{activeUser:Object(ke.a)({},e.activeUser)});case O:return Object(ke.a)({},e,{activeUser:a.payload});case j:return Object(ke.a)({},e,{error:a.payload});case C:return Object(ke.a)({},e);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie;switch((arguments.length>1?arguments[1]:void 0).type){case w:return Object(ke.a)({},e,{loggedIn:!0});case k:return Object(ke.a)({},e,{loggedIn:!1});default:return e}}}),_e=[we.a],Ae=Object(je.e)(Ue,{},Object(je.d)(je.a.apply(void 0,_e),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),Te=(t(172),t(173),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={isLogged:!0},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){localStorage.getItem("token")||this.setState({isLogged:!1})}},{key:"componentDidUpdate",value:function(){this.state.isLogged||this.setState({isLogged:!0})}},{key:"render",value:function(){return r.a.createElement(y.a,{store:Ae},r.a.createElement(m.a,{basename:"/DailyCalories",history:U},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"".concat("/DailyCalories","/login"),component:Ee}),r.a.createElement(p.b,{exact:!0,path:"".concat("/DailyCalories","/register"),component:Oe}),r.a.createElement(h,{exact:!0,path:"/",component:he,authed:this.state.isLogged}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},93:function(e,a,t){e.exports=t(174)},98:function(e,a,t){}},[[93,1,2]]]);
//# sourceMappingURL=main.b96e51c1.chunk.js.map