(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,a){e.exports=a(218)},161:function(e,t,a){},175:function(e,t,a){},218:function(e,t,a){"use strict";a.r(t);var n=a(42),r=a.n(n),o=a(0),l=a.n(o),i=a(8),s=a.n(i),c=(a(161),a(21)),u=a(16),m=a(25),d=a(23),f=a(24),p=a(142),k=a(47),b=(a(175),a(72)),h=a(122),g=a(121),E=a(128),v=a(251),C=a(252),y=a(92),O=a(253),T=a(130),j=a.n(T),S=a(120),N=Object(S.a)(function(e){return{appBar:{textAlign:"left",borderBottom:"1px solid ".concat(e.palette.divider)},toolbar:{color:"#777",flexWrap:"wrap"},toolbarTitle:{margin:"0 4em",flexGrow:1},link:{color:"#777",margin:e.spacing(1,1.5)},profile:{color:"#777"},accountCircle:{color:"#777",marginLeft:e.spacing(1)}}});function D(e){var t=N();return l.a.createElement(v.a,{position:"static",color:"default",elevation:0,className:t.appBar},l.a.createElement(C.a,{className:t.toolbar},l.a.createElement(y.a,{variant:"h6",noWrap:!0,className:t.toolbarTitle},"Task Board"),l.a.createElement("nav",null,!!e.profileUrl&&l.a.createElement(O.a,{href:e.profileUrl,className:t.profile},e.fullName,l.a.createElement(j.a,{className:t.accountCircle})),l.a.createElement(O.a,{href:"/accounts/logout/",className:t.link},"Sign Out"))))}var w=a(254),x=a(133),L=a.n(x),F=a(131),R=a.n(F),q=a(132),I=a.n(q),M=Object(S.a)(function(e){return{"@global":{li:{listStyle:"none"}},containerClassName:{display:"flex",flexWrap:"wrap"},pageClassName:{cursor:"pointer",display:"inline-block",borderRadius:"2px",textAlign:"center",verticalAlign:"top",height:"30px",position:"relative",overflow:"hidden",userSelect:"none",zIndex:"1","&:active":{boxShadow:"none",backgroundColor:E.a[800]}},pageLinkClassName:{display:"inline-block",fontSize:"1.2rem",padding:"0 10px",lineHeight:"30px"},activeClassName:{backgroundColor:E.a[300]},activeLinkClassName:{color:"#fff"},prevNextClassName:{},prevNextLinkClassName:{},disabledClassName:{cursor:"default",color:"#999"}}});var _=function(e){var t=M(),a=Math.ceil(e.count/e.limit),n=e.offset?Math.floor(e.count/e.offset):0;return l.a.createElement(I.a,{forcePage:n,previousLabel:" \u2190 ",nextLabel:" \u2192 ",breakLabel:"...",pageCount:a,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:e.onPageChange,containerClassName:t.containerClassName,pageClassName:t.pageClassName,pageLinkClassName:t.pageLinkClassName,activeClassName:t.activeClassName,activeLinkClassName:t.activeLinkClassName,previousClassName:t.pageClassName,nextClassName:t.pageClassName,previousLinkClassName:t.pageLinkClassName,nextLinkClassName:t.pageLinkClassName,breakClassName:t.pageClassName,breakLinkClassName:t.pageLinkClassName,disabledClassName:t.disabledClassName})},A={NOT_DONE:0,DONE:1},P=25,U=0,W="-1",V={None:0,ShowTaskInfo:1,EditTask:2,CreateTask:3,DeleteTask:4,TaskMarkDone:5},B=Object(h.a)(R.a)({marginBlockStart:"1em",marginBlockEnd:"1em",width:"95%"}),z=Object(h.a)(O.a)({minWidth:"3em",minHeight:"2.5em",fontSize:"1rem",padding:"0"}),H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={searchValue:""},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.limit,n=t.offset,r=t.tasksTotalNumber,o=t.onPageChange,i=t.onSearchRequested,s=t.setShowDialog;return l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,{container:!0,alignItems:"center",justify:"flex-start",direction:"row"},l.a.createElement(w.a,{item:!0,xs:1},l.a.createElement(z,{variant:"contained",color:"primary","aria-label":"add",onClick:function(){return s(V.CreateTask)}},l.a.createElement(L.a,null))),l.a.createElement(w.a,{item:!0,xs:6},!!r&&l.a.createElement(_,{limit:a,offset:n,count:r,onPageChange:o})),l.a.createElement(w.a,{item:!0,xs:5},l.a.createElement(B,{value:this.state.searchValue,onChange:function(t){return e.setState({searchValue:t})},onCancelSearch:function(){return i(null)},onRequestSearch:function(){return i(e.state.searchValue)}}))))}}]),t}(l.a.Component),J=a(126),G=a(135),Q=a.n(G),X=a(136),$=a.n(X),K=a(134),Y=a.n(K),Z=a(258),ee=a(256),te=a(257),ae=a(255),ne=Object(h.a)(ae.a)({minWidth:"3rem",padding:"0 6px",textAlign:"center",boxSizing:"border-box",fontWeight:"300",fontSize:"0.9rem",backgroundColor:"#26a69a",borderRadius:"2px",color:"white"}),re=Object(h.a)(ne)({backgroundColor:"#337ab7"}),oe=Object(h.a)(ee.a)({width:"25%"});function le(e){var t=e.data,a=e.currentUserId===t.created_by,n=1===t.status;return l.a.createElement(te.a,null,l.a.createElement(ee.a,{component:"th",scope:"row"},l.a.createElement(y.a,null,l.a.createElement(Z.a,{component:"button",variant:"body1",onClick:function(){return e.onTaskNameClick()}},t.name))),l.a.createElement(ee.a,{align:"center"},l.a.createElement(y.a,{caption:"body1"},t.created_by_username)),l.a.createElement(ee.a,{align:"center"},t.accomplished_by&&l.a.createElement(l.a.Fragment,null,l.a.createElement(ne,null,t.status_readable),l.a.createElement(y.a,{variant:"caption"},l.a.createElement("span",{className:"task-accomplished-by"},"by ".concat(t.accomplished_by_username)))),!t.accomplished_by&&l.a.createElement(re,null,t.status_readable)),l.a.createElement(oe,{align:"center"},a&&l.a.createElement(l.a.Fragment,null,l.a.createElement(J.a,{"aria-label":"edit",onClick:function(){return e.onTaskEditClick()}},l.a.createElement(Y.a,{color:"primary"})),l.a.createElement(J.a,{"aria-label":"delete",onClick:function(){return e.onTaskDeleteClick()}},l.a.createElement(Q.a,{color:"primary"}))),l.a.createElement(J.a,{"aria-label":"Mark as Done",disabled:n,onClick:function(){return e.onTaskMarkDoneClick()}},l.a.createElement($.a,{color:n?"disabled":"primary"}))))}var ie=a(260),se=a(262),ce=a(261),ue=a(83),me=a(272),de=a(259),fe=a(268),pe=Object(S.a)(function(e){return{formControl:{margin:e.spacing(1)}}});var ke=function(e){var t=pe();return l.a.createElement(de.a,{variant:"outlined",className:t.formControl},l.a.createElement(fe.a,{className:t.input,native:!0,value:e.statusFilter,onChange:function(t){return e.onStatusFilterChanged(t.target.value)},input:l.a.createElement(me.a,{margin:"dense"})},l.a.createElement("option",{value:-1},"All"),l.a.createElement("option",{value:0},"Not Done"),l.a.createElement("option",{value:1},"Done")))},be=Object(h.a)(ie.a)({}),he=Object(h.a)(ue.a)({width:"99%",margin:"auto",maxHeight:"75vh",overflow:"auto"}),ge=Object(h.a)(ee.a)({backgroundColor:"#f5f5f5",color:"black",fontSize:"1rem"}),Ee=function(e){return l.a.createElement(he,null,l.a.createElement(be,{size:"small"},l.a.createElement(ce.a,null,l.a.createElement(te.a,null,l.a.createElement(ge,null,"Name"),l.a.createElement(ge,{align:"center"},"Owner"),l.a.createElement(ge,{align:"center"},l.a.createElement("div",{style:{display:"flex",alignItems:"center",alignContent:"center",justifyContent:"center"}},l.a.createElement("div",null,"Status"),l.a.createElement(ke,{statusFilter:e.statusFilter,onStatusFilterChanged:e.onStatusFilterChanged}))),l.a.createElement(ge,{align:"center"},"Actions"))),l.a.createElement(se.a,null,e.children)))},ve=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.taskList,t=this.props,a=t.currentUserId,n=t.statusFilter,r=this.props,o=r.onStatusFilterChanged,i=r.setShowDialog;return l.a.createElement(l.a.Fragment,null,l.a.createElement(Ee,{statusFilter:n,onStatusFilterChanged:o},e.length>0&&e.map(function(e){return l.a.createElement(le,{id:e.id,key:e.id,data:e,currentUserId:a,onTaskNameClick:function(){return i(V.ShowTaskInfo,e.id)},onTaskEditClick:function(){return i(V.EditTask,e.id)},onTaskDeleteClick:function(){return i(V.DeleteTask,e.id)},onTaskMarkDoneClick:function(){return i(V.TaskMarkDone,e.id)}})})))}}]),t}(l.a.Component),Ce=a(61),ye=a(137),Oe=a.n(ye),Te=function e(){var t=this;Object(c.a)(this,e),this.getRequestContext=function(e,a,n,r,o){return{type:e,dataType:"json",url:a,data:n,context:t,success:function(e,t,a){return r(e)},error:function(e,t,a){return o(e,t,a)}}},this.post=function(e,a,n,o){var l=t.getRequestContext("POST",e,a,n,o);r.a.ajax(l)},this.patch=function(e,a,n,o){var l=t.getRequestContext("PATCH",e,a,n,o);r.a.ajax(l)},this.delete=function(e,a,n){var o=t.getRequestContext("DELETE",e,"",a,n);r.a.ajax(o)}},je=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isLoaded:!1,taskList:[],currentTotalNumber:0},a.onEditTask=function(e,t,n,r){(new Te).patch("/api/tasks/".concat(e,"/"),t,function(t){a.onEditSuccess(e,t),n(t)},function(t,n,o){a.onRequestError(e,t.status,o),r(t.status,o,t.responseJSON)})},a.onCreateTask=function(e,t,n){(new Te).post("/api/tasks/",e,function(e){a.onCreateSuccess(e),t(e)},function(e,t,r){a.onRequestError(void 0,e.status,r),n(e.status,r,e.responseJSON)})},a.onDeleteTask=function(e,t,n){(new Te).delete("/api/tasks/".concat(e,"/"),function(){a.onDeleteSuccess(e),t()},function(t,r,o){a.onRequestError(e,t.status,o),n(t.status,o,t.responseJSON.detail)})},a.onTaskMarkDone=function(e,t,n){(new Te).patch("/api/tasks/".concat(e,"/"),{status:A.DONE},function(n){a.onTaskMarkDoneSuccess(e,n),t(n)},function(t,r,o){a.onRequestError(e,t.status,o),n(t.status,o,t.responseJSON)})},a.onEditSuccess=function(e,t){var n=Object(Ce.a)(a.state.taskList),r=n.findIndex(function(t){return t.id===e}),o=n[r];for(var l in t)o[l]=t[l];a.setState({taskList:n})},a.onCreateSuccess=function(e){var t=Object(Ce.a)(a.state.taskList);t.unshift(e),a.setState({taskList:t})},a.onDeleteSuccess=function(e){var t=Object(Ce.a)(a.state.taskList),n=t.findIndex(function(t){return t.id===e});t.splice(n,1),a.setState({taskList:t})},a.onTaskMarkDoneSuccess=function(e,t){return a.onEditSuccess(e,t)},a.onRequestError=function(e,t,a){console.log(t,a)},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchTasks()}},{key:"componentDidUpdate",value:function(e){e.query!==this.props.query&&this.fetchTasks()}},{key:"getTaskManageFuncs",value:function(){return{onEditTask:this.onEditTask,onCreateTask:this.onCreateTask,onDeleteTask:this.onDeleteTask,onTaskMarkDone:this.onTaskMarkDone}}},{key:"getQueryParams",value:function(){var e=this.props.query,t=e.searchValue,a=e.limit,n=e.offset,r=e.statusFilter,o={limit:a,offset:n};return"-1"!==r&&(o.status=r),t&&(o.search=t),o}},{key:"fetchTasks",value:function(){var e=this;fetch("api/tasks/?".concat(Oe.a.stringify(this.getQueryParams()))).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,taskList:t.results,currentTotalNumber:t.count},function(){return e.props.onTotalNumberReceived(t.count)})},function(t){return e.setState({isLoaded:!1,error:t})})}},{key:"render",value:function(){return this.props.children(this.getTaskManageFuncs(),this.state.taskList)}}]),t}(l.a.Component),Se=a(265),Ne=a(266),De=a(4),we=a(271),xe=a(263),Le=a(264),Fe=a(138),Re=a.n(Fe),qe=Object(h.a)(xe.a)({display:"flex",flexDirection:"column",justifyContent:"space-evenly",minWidth:"50ch"}),Ie=Object(De.a)(function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}})(function(e){var t=e.children,a=e.classes,n=e.onClose;return l.a.createElement(Le.a,{disableTypography:!0,className:a.root},l.a.createElement(y.a,{variant:"h6"},t),l.a.createElement(J.a,{"aria-label":"close",className:a.closeButton,onClick:n},l.a.createElement(Re.a,null)))}),Me=function(e){return l.a.createElement(we.a,{open:!0,onClose:e.closeDialog,transitionDuration:{enter:50},"aria-labelledby":"form-dialog-title"},l.a.createElement(Ie,{id:"customized-dialog-title",onClose:e.closeDialog},e.title),e.children)},_e=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{variant:"body1",component:"div"},l.a.createElement("p",null,l.a.createElement("b",null,"Name: ")," ",e.name)),l.a.createElement(Se.a,null),l.a.createElement(y.a,{variant:"body1",component:"div"},l.a.createElement("p",null,l.a.createElement("b",null,"Created by: ")," ",e.created_by_username),l.a.createElement("p",null,l.a.createElement("b",null,"Status: "),e.accomplished_by&&l.a.createElement(ne,null,e.status_readable),!e.accomplished_by&&l.a.createElement(re,null,e.status_readable))),l.a.createElement(Se.a,null),l.a.createElement(y.a,{variant:"body1",component:"div"},l.a.createElement("p",null,l.a.createElement("b",null,"Description: ")," ",e.description)))};function Ae(e){var t=e.taskObject;return l.a.createElement(Me,Object.assign({title:"Task Information"},e),l.a.createElement(qe,null,_e(t)),l.a.createElement(Ne.a,null,l.a.createElement(O.a,{variant:"outlined",onClick:e.closeDialog,color:"primary"},"OK")))}var Pe=a(144),Ue=a(30),We=a(143),Ve=a(110),Be=a(270),ze=a(273),He=Object(h.a)(xe.a)({display:"flex",flexDirection:"column",justifyContent:"space-evenly",minWidth:"50ch",overflow:"visible"}),Je=Object(h.a)("div")({margin:"-.85em 0",color:"red",fontSize:".85em"}),Ge=Object(S.a)(function(e){return{formControl:{margin:"1em 0"}}}),Qe=function(e){var t=e.field,a=e.form,n=(a.touched,a.errors,Object(Ve.a)(e,["field","form"])),r=l.a.useState(0),o=Object(We.a)(r,2),i=o[0],s=o[1],c=l.a.useRef(null),u=Ge();return l.a.useEffect(function(){s(c.current.offsetWidth)},[]),l.a.createElement(de.a,{className:u.formControl,variant:"outlined",fullWidth:!0},l.a.createElement(ze.a,{ref:c,htmlFor:"component-outlined"},n.title),l.a.createElement(me.a,Object.assign({id:"component-outlined",labelWidth:i},t,n)))},Xe=function(e){var t=e.field,a=e.form,n=(a.touched,a.errors,Object(Ve.a)(e,["field","form"])),r=Ge();return l.a.createElement(de.a,{className:r.formControl,variant:"outlined",fullWidth:!0},l.a.createElement(Be.a,Object.assign({label:n.title,select:!0,SelectProps:{native:!0},variant:"outlined"},t,n),l.a.createElement("option",{key:0,value:A.NOT_DONE},"Not Done"),l.a.createElement("option",{key:1,value:A.DONE},"Done")))};function $e(e){var t=function(e){return l.a.createElement(Je,null,e)};return function(a){a.values,a.errors;var n=a.dirty,r=a.status,o=(a.touched,a.handleBlur,a.handleChange,a.handleSubmit,a.isSubmitting);return l.a.createElement(Ue.c,null,l.a.createElement(He,null,r&&r.error&&l.a.createElement("div",{style:{color:"red"}},r.msg),l.a.createElement(Ue.b,{type:"text",name:"name",title:"Name",component:Qe}),l.a.createElement(Ue.a,{name:"name",render:t}),l.a.createElement(Ue.b,{type:"text",name:"status",title:"Status",component:Xe}),l.a.createElement(Ue.a,{name:"status",render:t}),l.a.createElement(Ue.b,{multiline:!0,type:"text",name:"description",title:"Description",component:Qe}),l.a.createElement(Ue.a,{name:"description",render:t})),l.a.createElement(Ne.a,null,l.a.createElement(O.a,{variant:"outlined",type:"submit",color:"primary",disabled:o||!n},"Apply"),l.a.createElement(O.a,{variant:"outlined",color:"secondary",onClick:e.closeDialog},"Cancel")))}}var Ke=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props;return l.a.createElement(Me,Object.assign({title:"Edit Task"},e),l.a.createElement(Ue.d,{initialValues:Object(Pe.a)({},e.taskObject),onSubmit:function(t,a){var n=t.name,r=t.status,o=t.description;e.onEditTask(e.taskObject.id,{name:n,status:r,description:o},function(t){a.setSubmitting(!1),e.enqueueSnackbar('Task "'.concat(n,'" updated.'),{variant:"success"}),e.closeDialog()},function(e,t,n){a.setSubmitting(!1),a.setErrors(n),e>400&&a.setStatus({error:!0,msg:"Error ".concat(e,": ").concat(t)})})},render:$e(e)}))}}]),t}(l.a.Component),Ye=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props;return l.a.createElement(Me,Object.assign({title:"Create New Task"},e),l.a.createElement(Ue.d,{initialValues:{status:A.NOT_DONE,name:"",description:""},onSubmit:function(t,a){var n=t.name,r=t.status,o=t.description;e.onCreateTask({name:n,status:r,description:o},function(t){a.setSubmitting(!1),e.enqueueSnackbar('Task "'.concat(t.name,'" created.'),{variant:"success"}),e.closeDialog()},function(e,t,n){a.setSubmitting(!1),a.setErrors(n),e>400&&a.setStatus({error:!0,msg:"Error ".concat(e,": ").concat(t)})})},render:$e(e)}))}}]),t}(l.a.Component),Ze=a(267),et=Object(h.a)(Ze.a)({color:"red"});function tt(e){var t=e.taskObject;return l.a.createElement(Me,Object.assign({title:"Delete Task"},e),l.a.createElement(qe,null,l.a.createElement(et,null,"Are you sure you want to delete this task?"),_e(t)),l.a.createElement(Ne.a,null,l.a.createElement(O.a,{variant:"outlined",color:"secondary",onClick:function(){e.closeDialog(),e.onDeleteTask(e.taskObject.id,function(){e.enqueueSnackbar('Task "'.concat(t.name,'" deleted.'),{variant:"success"})},function(t,a,n){e.enqueueSnackbar("Error ".concat(t,": ").concat(a,". ").concat(n),{variant:"error"})})}},"Delete"),l.a.createElement(O.a,{variant:"outlined",type:"submit",color:"primary",onClick:e.closeDialog},"Cancel")))}var at=Object(h.a)(Ze.a)({color:"#26a69a"}),nt=Object(h.a)(O.a)({color:"#26a69a",borderColor:"inherit"});function rt(e){var t=e.taskObject;return l.a.createElement(Me,Object.assign({title:"Mark as Done"},e),l.a.createElement(qe,null,l.a.createElement(at,null,'Are you sure you want to mark this task as "Done" by you?'),_e(t)),l.a.createElement(Ne.a,null,l.a.createElement(nt,{variant:"outlined",onClick:function(){e.closeDialog(),e.onTaskMarkDone(e.taskObject.id,function(){e.enqueueSnackbar('Task "'.concat(t.name,'" marked as "Done"'),{variant:"success"})},function(t,a,n){e.enqueueSnackbar("Error ".concat(t,": ").concat(a,". ").concat(n),{variant:"error"})})}},"Done"),l.a.createElement(O.a,{variant:"outlined",type:"submit",onClick:e.closeDialog},"Cancel")))}var ot=function(e){var t=function(t){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={showDialog:{actionType:V.None,taskId:void 0}},t.setShowDialog=function(e,a){t.setState({showDialog:{actionType:e,taskId:a}})},t.onDialogClose=function(){t.setState({showDialog:{}})},t.getDialog=function(e,a){var n,r=t.state.showDialog,o=r.actionType,i=r.taskId;if(!o)return null;var s={closeDialog:t.onDialogClose};switch(o){case V.TaskMarkDone:n=Object(k.withSnackbar)(rt),s.onTaskMarkDone=e.onTaskMarkDone;break;case V.DeleteTask:n=Object(k.withSnackbar)(tt),s.onDeleteTask=e.onDeleteTask;break;case V.ShowTaskInfo:n=Ae;break;case V.EditTask:n=Object(k.withSnackbar)(Ke),s.onEditTask=e.onEditTask;break;case V.CreateTask:n=Object(k.withSnackbar)(Ye),s.onCreateTask=e.onCreateTask;break;default:n=null}return n?(n&&i&&(s.taskObject=a.find(function(e){return e.id===i})),l.a.createElement(n,s)):null},t}return Object(f.a)(a,t),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(e,Object.assign({setShowDialog:this.setShowDialog,getDialog:this.getDialog},this.props))}}]),a}(l.a.Component);return t.displayName="withApi(".concat(function(e){return e.displayName||e.name||"Component"}(e),")"),t},lt=Object(b.a)({palette:{primary:{main:E.a[800]}}}),it=Object(h.a)("div")({width:"85%",margin:"auto",overflowX:"auto",padding:"1px"}),st=Object(p.a)(function(e,t,a,n){return{searchValue:e,limit:t,offset:a,statusFilter:n}}),ct=ot(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={currentUserId:null,profileUrl:"",fullName:"",tasksTotalNumber:0,limit:P,offset:U,statusFilter:W,searchValue:""},a.onPageChanged=function(e){var t=Math.ceil(e.selected*a.state.limit);a.setState({offset:t})},a.onTaskStatusFilterChanged=function(e){a.state.statusFilter!==e&&a.setState({limit:P,offset:U,statusFilter:e})},a.onSearchRequested=function(e){a.state.searchValue!==e&&a.setState({searchValue:e,limit:P,offset:U,statusFilter:W})},a.onTasksTotalNumberReceived=function(e){a.state.tasksTotalNumber!==e&&a.setState({tasksTotalNumber:e})},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("api/globals/").then(function(e){return e.json()}).then(function(t){e.setState({tasksTotalNumber:t.tasks_total,currentUserId:t.current_user,profileUrl:t.profile_url,fullName:t.fullname})},function(t){return e.setState({error:t})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.searchValue,n=t.limit,r=t.offset,o=t.tasksTotalNumber,i=t.currentUserId,s=t.statusFilter,c=t.profileUrl,u=t.fullName,m=this.props,d=m.setShowDialog,f=m.getDialog;return l.a.createElement("div",{className:"App"},l.a.createElement(g.a,{theme:lt},l.a.createElement(k.SnackbarProvider,{anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:2e3},l.a.createElement(D,{profileUrl:c,fullName:u}),l.a.createElement(it,null,l.a.createElement(H,{tasksTotalNumber:o,limit:n,offset:r,onPageChange:this.onPageChanged,onSearchRequested:this.onSearchRequested,setShowDialog:d}),l.a.createElement(je,{query:st(a,n,r,s),onTotalNumberReceived:this.onTasksTotalNumberReceived},function(t,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement(ve,{taskList:a,currentUserId:i,statusFilter:s,onStatusFilterChanged:e.onTaskStatusFilterChanged,setShowDialog:d}),f(t,a))})))))}}]),t}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(ct,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}),r.a.ajaxSetup({beforeSend:function(e,t){if(n=t.type,!/^(GET|HEAD|OPTIONS|TRACE)$/i.test(n)&&!this.crossDomain){var a=function(e){var t=null;if(document.cookie&&""!=document.cookie)for(var a=document.cookie.split(";"),n=0;n<a.length;n++){var o=r.a.trim(a[n]);if(o.substring(0,e.length+1)==e+"="){t=decodeURIComponent(o.substring(e.length+1));break}}return t}("csrftoken");e.setRequestHeader("X-CSRFToken",a)}var n}})}},[[156,1,2]]]);
//# sourceMappingURL=main.d63dc85d.chunk.js.map