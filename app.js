/* CLOUD SYNC: paste your Firebase Realtime Database URL between the quotes (see README.txt) */
var SYNC_URL='https://gpolss-default-rtdb.firebaseio.com/',syncT=0;
var K='gpolss2',S,U=null,V='cat',Q='';
var $=function(s){return document.querySelector(s)};
var D=function(n){return new Date(Date.now()+n*864e5).toISOString().slice(0,10)};
var e=function(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
function save(){try{localStorage.setItem(K,JSON.stringify(S))}catch(_){}}
function log(a){S.log.unshift(D(0)+' | '+(U?U.id:'guest')+' | '+a);save()}
function m(t,ok){var x=$('#msg');x.textContent=t;x.style.background=ok?'#2e7d32':'#c62828';x.style.display='block';setTimeout(function(){x.style.display='none'},3200)}
function seed(){
 var CODE={'Accountancy':'ACC','Business Administration and Management':'BAM','Office Technology and Management':'OTM','Computer Science':'CSC','Computer Engineering Technology':'CET','Science Laboratory Technology':'SLT','Mass Communication':'MAC','Electrical/Electronic Engineering Technology':'EEE','Banking and Finance':'BNF','Statistics':'STA','General Studies':'GEN'};
 var DEF={'Accountancy':['Accountancy','657'],'Business Administration and Management':['Management','658'],'Office Technology and Management':['Office Management','651'],'Computer Science':['Computer Science','004'],'Computer Engineering Technology':['Computer Engineering','621.39'],'Science Laboratory Technology':['Laboratory Science','542'],'Mass Communication':['Mass Communication','302.23'],'Electrical/Electronic Engineering Technology':['Electrical Engineering','621.3'],'Banking and Finance':['Banking and Finance','332'],'Statistics':['Statistics','519.5'],'General Studies':['Study Skills','001.4']};
 var R=[[/Networks|Data Comm/,'Computer Networks','004.6'],[/Operating/,'Operating Systems','005.43'],[/Database/,'Databases','005.74'],[/Algorithms/,'Algorithms','005.1'],[/Python|Java|C Programming/,'Programming','005.13'],[/Software Eng/,'Software Engineering','005.1'],[/Statistic|Probability/,'Statistics','519.5'],[/Microprocessor|Intel/,'Microprocessors','004.165'],[/Computer Organi|Digital|Architecture/,'Digital Systems','621.39'],[/Machine|Machinery|Power Elec/,'Electrical Machines and Power','621.31'],[/Microbiology/,'Microbiology','579'],[/Biolog|Biochem/,'Biology and Biochemistry','570'],[/Physics/,'Physics','530'],[/Chemi|Analytical/,'Chemistry','543'],[/Business Comm|Technical Comm/,'Business Communication','651.7'],[/Microsoft Office/,'Computer Applications','005.5'],[/Information Systems/,'Information Systems','658.4038'],[/Research/,'Research Methods','001.42'],[/Public Relations/,'Public Relations','659.2'],[/Cost Acc|Management Control/,'Cost and Management Accounting','657.42'],[/Audit/,'Auditing','657.45'],[/Taxation/,'Taxation','336.2'],[/Marketing/,'Marketing','658.8'],[/Human Resource/,'Human Resource Management','658.3'],[/Entrepreneur/,'Entrepreneurship','658.421'],[/Strategic/,'Strategic Management','658.4012'],[/Banking|Money|Capital|Investments|Financial Management|Economics/,'Banking and Finance','332']];
 var HND=/Intermediate|Strategic|Marketing Management|Molecular|Lehninger|Internals|Practitioner|Capital Markets|Investments|Engineering Circuit|Power Electronics|Electric Machinery|Microelectronic|Art of Electronics|Management Control|Audit|Taxation|Handbook|Learning|Organization and Design|Quantitative|Analytical Chem|Modern Operating|Software Engineering$/;
 var ND=/Accounting 1|Starting Out|C Programming|Digital Fundamentals|Electronic Principles|Accountancy|Essentials|Fundamentals of Management|Office|Records|Electrical and Electronic Principles|Principles of Marketing|Dictionary|Introduction to Information|Technical Comm/;
 var ED={'Introduction to Algorithms':['4th','2022'],'Database System Concepts':['7th','2019'],'Operating System Concepts':['10th','2018'],'Computer Networks':['5th','2010'],'Software Engineering: A Practitioner’s Approach':['9th','2019'],'An Introduction to Statistical Learning':['2nd','2021'],'The C Programming Language':['2nd','1988'],'Principles of Marketing':['18th','2020'],'Marketing Management':['16th','2021'],'Fundamentals of Physics':['11th','2018'],'Lehninger Principles of Biochemistry':['8th','2021'],'Molecular Biology of the Cell':['7th','2022'],'Fundamentals of Database Systems':['7th','2015'],'Electronic Devices and Circuit Theory':['11th','2013']};
 var DATA=`#Accountancy
Frank Wood and Alan Sangster|Business Accounting 1
Frank Wood and Alan Sangster|Business Accounting 2
Jerry J. Weygandt, Paul D. Kimmel and Donald E. Kieso|Financial Accounting
Donald E. Kieso, Jerry J. Weygandt and Terry D. Warfield|Intermediate Accounting
S.N. Maheshwari and S.K. Maheshwari|Financial Accounting
T.S. Grewal|Introduction to Accountancy
S.P. Jain and K.L. Narang|Cost Accounting
M.N. Arora|Cost Accounting: Principles and Practice
Anthony and Govindarajan|Management Control Systems
Kaplan Publishing|ACCA Financial Reporting Study Text
Kaplan Publishing|ACCA Audit and Assurance Study Text
Kaplan Publishing|ACCA Taxation Study Text
Charles T. Horngren|Cost Accounting: A Managerial Emphasis
#Business Administration and Management
Stephen P. Robbins and Mary Coulter|Management
Ricky W. Griffin|Fundamentals of Management
Richard L. Daft|Management
John R. Schermerhorn|Management
Gareth R. Jones and Jennifer M. George|Contemporary Management
Philip Kotler and Gary Armstrong|Principles of Marketing
Philip Kotler, Kevin Keller and Alexander Chernev|Marketing Management
Gary Dessler|Human Resource Management
Hisrich, Peters and Shepherd|Entrepreneurship
Charles W. L. Hill and Gareth R. Jones|Strategic Management Theory
#Office Technology and Management
Mary Ellen Guffey and Dana Loewy|Essentials of Business Communication
Mary Ellen Guffey and Dana Loewy|Business Communication: Process and Product
Raymond V. Lesikar, Marie E. Flatley and Kathryn Rentz|Business Communication: Making Connections in a Digital World
Gary B. Shelly and Misty E. Vermaat|Microsoft Office
A.C. Eze|Modern Office Management
John Harrison|Office Organisation and Management
Judith Read and Mary Lea Ginn|Records Management
Patricia Wallace|Introduction to Information Systems
#Computer Science
Brian W. Kernighan and Dennis M. Ritchie|The C Programming Language
Tony Gaddis|Starting Out with Python
Deitel and Deitel|Java: How to Program
Thomas H. Cormen et al.|Introduction to Algorithms
Robert Sedgewick and Kevin Wayne|Algorithms
Abraham Silberschatz, Henry Korth and S. Sudarshan|Database System Concepts
Elmasri and Navathe|Fundamentals of Database Systems
Silberschatz, Galvin and Gagne|Operating System Concepts
Andrew S. Tanenbaum and David J. Wetherall|Computer Networks
Behrouz A. Forouzan|Data Communications and Networking
William Stallings|Operating Systems: Internals and Design Principles
Roger S. Pressman and Bruce R. Maxim|Software Engineering: A Practitioner’s Approach
Gareth James et al.|An Introduction to Statistical Learning
Andrew S. Tanenbaum and Herbert Bos|Modern Operating Systems
Ian Sommerville|Software Engineering
#Computer Engineering Technology
David A. Patterson and John L. Hennessy|Computer Organization and Design
M. Morris Mano|Digital Design
John F. Wakerly|Digital Design: Principles and Practices
Thomas L. Floyd|Digital Fundamentals
Barry B. Brey|The Intel Microprocessors
R. S. Gaonkar|Microprocessor Architecture, Programming, and Applications with the 8085
Douglas V. Hall|Microprocessors and Interfacing
Paul Horowitz and Winfield Hill|The Art of Electronics
Sedra and Smith|Microelectronic Circuits
William Stallings|Computer Organization and Architecture
Andrew S. Tanenbaum and David J. Wetherall|Computer Networks
#Science Laboratory Technology
Daniel C. Harris|Quantitative Chemical Analysis
Vogel|Textbook of Quantitative Chemical Analysis
Douglas A. Skoog, Donald M. West, F. James Holler and Stanley R. Crouch|Fundamentals of Analytical Chemistry
Gary D. Christian|Analytical Chemistry
Raymond Chang and Kenneth A. Goldsby|Chemistry
Campbell and Reece|Biology
David L. Nelson and Michael M. Cox|Lehninger Principles of Biochemistry
Bruce Alberts et al.|Molecular Biology of the Cell
Prescott, Harley and Klein|Microbiology
Tortora, Funke and Case|Microbiology: An Introduction
Raymond A. Serway and John W. Jewett|Physics for Scientists and Engineers
David Halliday, Robert Resnick and Jearl Walker|Fundamentals of Physics
#Mass Communication
Denis McQuail|McQuail’s Mass Communication Theory
Joseph R. Dominick|The Dynamics of Mass Communication
Mencher|News Reporting and Writing
James Watson and Anne Hill|A Dictionary of Media and Communication
Arthur Asa Berger|Media and Communication Research Methods
Fraser P. Seitel|The Practice of Public Relations
Robert L. Heath|The SAGE Handbook of Public Relations
Marshall McLuhan|Understanding Media: The Extensions of Man
#Electrical/Electronic Engineering Technology
Theodore Wildi|Electrical Machines, Drives, and Power Systems
B. L. Theraja and A. K. Theraja|A Textbook of Electrical Technology
Robert L. Boylestad and Louis Nashelsky|Electronic Devices and Circuit Theory
Thomas L. Floyd|Electronic Devices
Thomas L. Floyd|Electronic Principles
William H. Hayt, Jack Kemmerly and Steven Durbin|Engineering Circuit Analysis
John Bird|Electrical and Electronic Principles and Technology
A. E. Fitzgerald, Charles Kingsley and Stephen Umans|Electric Machinery
Stephen J. Chapman|Electric Machinery Fundamentals
John Bird|Electrical Circuit Theory and Technology
Muhammad H. Rashid|Power Electronics: Devices, Circuits, and Applications
William D. Cooper and Albert D. Helfrick|Electronic Instrumentation and Measurement Techniques
#Banking and Finance
Peter S. Rose and Sylvia C. Hudgins|Bank Management and Financial Services
Frederic S. Mishkin|The Economics of Money, Banking, and Financial Markets
Frank J. Fabozzi|Capital Markets: Institutions and Instruments
Keith Cuthbertson and Dirk Nitzsche|Investments: Spot and Derivative Markets
Eugene F. Brigham and Joel F. Houston|Fundamentals of Financial Management
N. Gregory Mankiw|Principles of Economics
#Statistics
Walpole, Myers, Myers and Ye|Probability and Statistics for Engineers and Scientists
Sheldon M. Ross|Introduction to Probability and Statistics for Engineers and Scientists
Montgomery and Runger|Applied Statistics and Probability for Engineers
Andy Field|Discovering Statistics Using IBM SPSS Statistics
Gareth James et al.|An Introduction to Statistical Learning
#General Studies
John W. Creswell and J. David Creswell|Research Design
C.R. Kothari and Gaurav Garg|Research Methodology: Methods and Techniques
Mike Markel and Stuart A. Selber|Technical Communication`;
 S={titles:[],copies:[],users:[],loans:[],res:[],reqs:[],log:[],n:1,fav:{},notes:[],seats:[]};
 var dept='',cnt={},seen={};
 DATA.split('\n').forEach(function(ln){ln=ln.trim();if(!ln)return;if(ln[0]=='#'){dept=ln.slice(1);return}
  var p=ln.split('|'),au=p[0],ti=p[1],t=seen[ti+au];
  if(t){if(t.depts.indexOf(dept)<0){t.depts.push(dept);t.dept=t.depts.join(' / ')}return}
  var d=DEF[dept],r=R.filter(function(x){return x[0].test(ti)})[0],ref=/Dictionary|Handbook/.test(ti),ed=ED[ti]||['Latest ed.',''];
  var sn=/Kaplan/.test(au)?'KAP':au.split(/,| and /)[0].trim().split(' ').pop().slice(0,3).toUpperCase(),dw=r?r[2]:d[1];
  cnt[dept]=(cnt[dept]||0)+1;var id=S.titles.length+1;
  t={id:id,title:ti,author:au,edition:ed[0],year:ed[1],subject:r?r[1]:d[0],dept:dept,depts:[dept],level:HND.test(ti)?'HND':ND.test(ti)?'ND':lv(ti),format:ref?'Reference':'Print',dewey:dw,call:dw+' '+sn,shelf:CODE[dept]+'-'+String(cnt[dept]).padStart(2,'0'),pub:true};
  seen[ti+au]=t;S.titles.push(t);
  for(var i=0,k=ref?1:1+hue(ti)%3;i<k;i++)S.copies.push({acc:'GP-'+String(S.n++).padStart(4,'0'),tid:id,status:ref?'Reference-Only':'Available',cond:'Good'})});
 [['admin','System Administrator','admin'],['acq','Acquisition Officer','acq'],['cat','Cataloguer','cat'],['circ','Circulation Officer','circ'],['student','Taibat Taiwo Adekoya (Student)','patron']].forEach(function(u){S.users.push({id:u[0],name:u[1],role:u[2],pw:'1234',ok:true})});
 var a=S.copies[0],b=S.copies[3];
 S.loans.push({id:1,acc:a.acc,uid:'student',out:D(-20),due:D(-6),ret:null,paid:false,ren:0},{id:2,acc:b.acc,uid:'student',out:D(-2),due:D(12),ret:null,paid:false,ren:0});
 a.status='On Loan';b.status='On Loan';save()}

try{S=JSON.parse(localStorage.getItem(K))}catch(_){}
if(!S)seed();
function T(id){return S.titles.filter(function(t){return t.id==id})[0]}
function C(a){return S.copies.filter(function(c){return c.acc==a})[0]}
function avail(tid){return S.copies.filter(function(c){return c.tid==tid&&c.status=='Available'}).length}
function fine(l){var d=Math.floor((new Date(l.ret||D(0))-new Date(l.due))/864e5);return d>0?d*50:0}
function bd(s){return '<span class="b '+String(s).replace(/\W/g,'')+'">'+e(s)+'</span>'}
function tb(h,rows){return '<div class="w"><table><tr>'+h.map(function(x){return '<th>'+x+'</th>'}).join('')+'</tr>'+(rows.length?rows.map(function(r){return '<tr>'+r.map(function(x){return '<td>'+x+'</td>'}).join('')+'</tr>'}).join(''):'<tr><td colspan='+h.length+'>Nothing to show.</td></tr>')+'</table></div>'}
function can(r){return U&&(U.role=='admin'||U.role==r)}
var NAV=[['cat','Catalogue',0],['acct','My Account','patron'],['circ','Circulation','circ'],['acq','Acquisition','acq'],['ctl','Cataloging','cat'],['rep','Dashboard and Reports','staff'],['usr','Users','admin'],['aud','Audit Log','admin']];
function show(r,x){return !r||(U&&(r=='staff'?U.role!='patron':(U.role==r||U.role=='admin')))}
function go(v){V=v;render()}
function render(){
 if(!U&&V!='cat')V='login';
 $('#who').innerHTML=U?e(U.name)+' <button class="s" onclick="out()">Logout</button>':'<button class="s" onclick="go(\'login\')">Login / Register</button>';
 $('#nav').innerHTML=NAV.filter(function(n){return show(n[2])&&(n[0]=='cat'||U)}).map(function(n){return '<button class="'+(V==n[0]?'on':'')+'" onclick="go(\''+n[0]+'\')">'+n[1]+'</button>'}).join('');
 var f={cat:vCat,login:vLogin,acct:vAcct,circ:vCirc,acq:vAcq,ctl:vCtl,rep:vRep,aud:vAud,usr:vUsr,pw:vPw}[V];
 $('#app').innerHTML=f();if(V=='cat')rs()}
function out(){U=null;V='cat';render()}
function vLogin(){return '<div class="card"><h2>Login</h2><p class="m">Demo accounts (password 1234): admin, acq, cat, circ, student</p><div class="row"><input id=lu placeholder="Username"><input id=lp type=password placeholder="Password"><button onclick="login()">Login</button></div></div><div class="card"><h2>Student registration</h2><div class="row"><input id=rn placeholder="Full name"><input id=ri placeholder="Matric / Staff ID"><input id=rp type=password placeholder="Password"><button onclick="reg()">Register</button></div></div>'}
function login(){var u=S.users.filter(function(x){return x.id==$('#lu').value.trim()&&x.pw==$('#lp').value})[0];if(!u)return m('Wrong username or password');U=u;log('login');V=u.role=='patron'?'acct':u.role=='cat'?'ctl':u.role=='acq'?'acq':u.role=='circ'?'circ':'rep';render()}
function reg(){var n=$('#rn').value.trim(),i=$('#ri').value.trim(),p=$('#rp').value;if(!n||!i||p.length<4)return m('Fill every field (password 4+ characters)');if(S.users.some(function(x){return x.id==i}))return m('That ID is already registered');S.users.push({id:i,name:n,role:'patron',pw:p,ok:true});save();m('Registered. You can now log in.',1)}
function vCat(){return '<h2>Library Catalogue</h2><input id=q placeholder="Search title, author, subject or call number" oninput="rs()" value="'+e(Q)+'"><div class=card id=rs></div>'}
function rs(){Q=$('#q').value;var q=Q.toLowerCase();var r=S.titles.filter(function(t){return t.pub&&(t.title+t.author+t.subject+t.call).toLowerCase().indexOf(q)>-1}).map(function(t){var a=avail(t.id);return [e(t.title),e(t.author),e(t.subject),e(t.call),e(t.shelf),a?bd('Available')+' ('+a+')':bd('On Loan'),U&&U.role=='patron'&&!a?'<button class="s" onclick="reserve('+t.id+')">Reserve</button>':'']});$('#rs').innerHTML=tb(['Title','Author','Subject','Call no.','Shelf','Status',''],r)}
function reserve(id){if(T(id).format=='Reference')return m('Reference item: for use inside the library only.');if(S.res.some(function(r){return r.tid==id&&r.uid==U.id&&r.st!='Done'}))return m('Already reserved');S.res.push({id:Date.now(),tid:id,uid:U.id,st:'Waiting'});log('reserve '+id);m('Reserved. You will be notified when a copy is returned.',1)}
function myLoans(uid){return S.loans.filter(function(l){return l.uid==uid})}
function loanRow(l,st){var c=C(l.acc),t=T(c.tid),od=!l.ret&&l.due<D(0),f=fine(l);return [l.acc,e(t.title),e(l.uid),l.out,l.due,l.ret||(od?bd('Overdue'):bd('On Loan')),f?'₦'+f+(l.paid?' (paid)':''):'-',st?(l.ret?(f&&!l.paid?'<button class="s g" onclick="pay('+l.id+')">Mark paid</button>':''):'<button class="s" onclick="renew('+l.id+')">Renew</button>'):(!l.ret?'<button class="s" onclick="renew('+l.id+')">Renew</button>':'')]}
var LH=['Copy','Title','Student','Issued','Due','Status','Fine',''];
function vAcct(){var l=myLoans(U.id),r=S.res.filter(function(x){return x.uid==U.id&&x.st!='Done'});return '<h2>My Account</h2><div class=card><h3>My loans</h3>'+tb(LH,l.map(function(x){return loanRow(x,0)}))+'</div><div class=card><h3>My reservations</h3>'+tb(['Title','Status'],r.map(function(x){return [e(T(x.tid).title),x.st=='Ready'?'Ready for pickup':bd(x.st)]}))+'</div>'}
function issue(){var u=S.users.filter(function(x){return x.id==nid($('#iu').value)&&x.role=='patron'})[0],c=C($('#ia').value.trim().toUpperCase());
 if(!u)return m('Student not found');if(u.ok===false)return m('This student account is suspended');if(!c)return m('Copy not found');
 var open=S.loans.filter(function(l){return l.uid==u.id&&!l.ret});
 if(open.length>=3)return m('Borrowing limit (3) reached');
 if(open.some(function(l){return l.due<D(0)}))return m('Student has an overdue book. Blocked.');
 if(myLoans(u.id).some(function(l){return fine(l)&&!l.paid}))return m('Student has unpaid fines. Blocked.');
 var held=S.res.filter(function(r){return r.tid==c.tid&&r.st=='Ready'})[0];
 if(c.status=='On Hold'&&(!held||held.uid!=u.id))return m('Copy is held for another student');
 if(c.status!='Available'&&c.status!='On Hold')return m('Copy is not available ('+c.status+')');
 if(held&&held.uid==u.id)held.st='Done';
 S.loans.push({id:Date.now(),acc:c.acc,uid:u.id,out:D(0),due:D(14),ret:null,paid:false,ren:0});c.status='On Loan';log('issue '+c.acc+' to '+u.id);m('Issued. Due '+D(14),1);render()}
function back(){var c=C($('#ra').value.trim().toUpperCase()),l=c&&S.loans.filter(function(x){return x.acc==c.acc&&!x.ret})[0];if(!l)return m('No open loan for that copy');
 var cd=$('#rc').value;l.ret=D(0);c.cond=cd;var w=S.res.filter(function(r){return r.tid==c.tid&&r.st=='Waiting'})[0],f=fine(l);
 c.status=cd!='Good'?'Damaged':w?'On Hold':'To Be Shelved';if(w&&cd=='Good'){w.st='Ready';m('Returned. Notify '+w.uid+': reserved copy ready.',1)}else m('Returned.'+(f?' Fine ₦'+f:''),1);
 log('return '+c.acc+' ('+cd+')'+(f?' fine '+f:''));save();render()}
function renew(id){var l=S.loans.filter(function(x){return x.id==id})[0],c=C(l.acc);if(l.ren>=2)return m('Maximum renewals reached');if(S.res.some(function(r){return r.tid==c.tid&&r.st=='Waiting'}))return m('Another student has reserved this title');l.due=D(0)>l.due?D(14):new Date(new Date(l.due).getTime()+14*864e5).toISOString().slice(0,10);l.ren++;log('renew '+l.acc);m('Renewed to '+l.due,1);render()}
function pay(id){S.loans.filter(function(x){return x.id==id})[0].paid=true;log('fine paid loan '+id);render()}
function shelve(a){C(a).status='Available';log('shelved '+a);render()}
function vCirc(){var sh=S.copies.filter(function(c){return c.status=='To Be Shelved'||c.status=='Damaged'});
 return '<h2>Circulation Desk</h2><div class=card><h3>Issue book</h3><div class=row><input id=iu placeholder="Student ID or email"><input id=ia placeholder="Accession no. (e.g. GP-0002)"><button onclick="issue()">Issue</button></div><h3>Return book</h3><div class=row><input id=ra placeholder="Accession no."><select id=rc><option>Good</option><option>Pages torn</option><option>Marked</option><option>Damaged</option></select><button class=g onclick="back()">Return</button></div></div><div class=card><h3>Loans</h3>'+tb(LH,S.loans.slice().reverse().map(function(l){return loanRow(l,1)}))+'</div><div class=card><h3>To be shelved / damaged</h3>'+tb(['Copy','Title','Status',''],sh.map(function(c){return [c.acc,e(T(c.tid).title),bd(c.status),c.status=='To Be Shelved'?'<button class="s" onclick="shelve(\''+c.acc+'\')">Mark shelved</button>':'<button class="s" onclick="shelve(\''+c.acc+'\')">Repaired, shelve</button>']}))+'</div><div class=card><h3>Reservations</h3>'+tb(['Title','Student','Status'],S.res.filter(function(r){return r.st!='Done'}).map(function(r){return [e(T(r.tid).title),e(r.uid),bd(r.st)]}))+'</div>'}
function vAcq(){var a=U.role=='admin';return '<h2>Acquisition</h2><div class=card><h3>New purchase request</h3><div class=row><input id=qt placeholder="Title"><input id=qa placeholder="Author"><input id=qn type=number min=1 value=1 style="width:80px"><button onclick="req()">Submit</button></div></div><div class=card>'+tb(['#','Title','Author','Qty','Status','Action'],S.reqs.map(function(r){var b='';if(r.st=='Requested'&&a)b='<button class="s g" onclick="stp('+r.id+',\'Approved\')">Approve</button> <button class="s r" onclick="stp('+r.id+',\'Rejected\')">Reject</button>';if(r.st=='Approved')b='<button class="s" onclick="stp('+r.id+',\'Ordered\')">Place order</button>';if(r.st=='Ordered')b='<button class="s g" onclick="rec('+r.id+')">Receive</button>';return [r.id,e(r.title),e(r.author),r.qty,bd(r.st),b]}))+'</div>'}
function req(){var t=$('#qt').value.trim();if(!t)return m('Enter a title');S.reqs.push({id:S.reqs.length+1,title:t,author:$('#qa').value.trim(),qty:+$('#qn').value||1,st:'Requested'});log('request '+t);render()}
function stp(id,s){S.reqs.filter(function(r){return r.id==id})[0].st=s;log('request '+id+' '+s);render()}
function rec(id){var r=S.reqs.filter(function(x){return x.id==id})[0],tid=S.titles.length+1;r.st='Received';S.titles.push({id:tid,title:r.title,author:r.author,subject:'',dewey:'',call:'',shelf:'',pub:false});var a=[];for(var i=0;i<r.qty;i++){var n='GP-'+String(S.n++).padStart(4,'0');a.push(n);S.copies.push({acc:n,tid:tid,status:'Awaiting Cataloging',cond:'Good'})}log('received '+r.title+' '+a.join(','));m('Received. Accession: '+a.join(', '),1);render()}
function vCtl(){var q=S.titles.filter(function(t){return !t.pub});return '<h2>Cataloging</h2><p class=m>Newly received items waiting for classification.</p>'+(q.length?q.map(function(t){return '<div class=card><b>'+e(t.title)+'</b> by '+e(t.author)+'<div class=row style="margin-top:8px"><input id=s'+t.id+' placeholder="Subject"><input id=d'+t.id+' placeholder="Dewey no. e.g. 005.1"><input id=h'+t.id+' placeholder="Shelf"><button class=g onclick="pub('+t.id+')">Classify and publish</button></div></div>'}).join(''):'<div class=card>No items awaiting cataloging.</div>')}
function pub(id){var t=T(id),s=$('#s'+id).value.trim(),d=$('#d'+id).value.trim(),h=$('#h'+id).value.trim();if(!s||!d||!h)return m('Enter subject, Dewey number and shelf');t.subject=s;t.dewey=d;t.shelf=h;t.call=d+' '+(t.author||'XXX').slice(0,3).toUpperCase();t.pub=true;S.copies.forEach(function(c){if(c.tid==id&&c.status=='Awaiting Cataloging')c.status='Available'});log('cataloged '+t.title+' '+t.call);m('Published to the catalogue',1);render()}
function vRep(){var o=S.loans.filter(function(l){return !l.ret&&l.due<D(0)}),a=S.loans.filter(function(l){return !l.ret}),fn=S.loans.reduce(function(s,l){return s+(l.paid?fine(l):0)},0),fo=S.loans.reduce(function(s,l){return s+(l.paid?0:fine(l))},0),bad=S.copies.filter(function(c){return c.status=='Damaged'||c.status=='Lost'});
 var st=[['Titles',S.titles.filter(function(t){return t.pub}).length],['Copies',S.copies.length],['On loan',a.length],['Overdue',o.length],['Fines collected','₦'+fn],['Fines owed','₦'+fo],['Damaged / lost',bad.length],['Pending requests',S.reqs.filter(function(r){return r.st=='Requested'}).length]];
 return '<h2>Dashboard and Reports</h2><div class=stats>'+st.map(function(x){return '<div class=stat><b>'+x[1]+'</b>'+x[0]+'</div>'}).join('')+'</div><div class=card style="margin-top:14px"><h3>Overdue list</h3>'+tb(LH,o.map(function(l){return loanRow(l,0)}))+'</div><div class=card><h3>Full circulation history</h3>'+tb(LH,S.loans.map(function(l){return loanRow(l,0)}))+'</div>'}
function vAud(){return '<h2>Audit Log</h2><div class=card>'+tb(['Date | User | Action'],S.log.slice(0,100).map(function(x){return [e(x)]}))+'</div>'}
/* ===== Rich UI, booking, tracking, seats, notifications ===== */
S.fav=S.fav||{};S.notes=S.notes||[];S.seats=S.seats||[];
var SUBS=[],SUB='All',TK='',RS=['Requested','Approved','Ordered','Received'],SD=D(0),SL='08:00-10:00',SN=0,RMu='';
NAV=[['cat','Catalogue',0],['acct','My Account','patron'],['pw','Change Password',0],['trk','Track',0],['seat','Seats','patron'],['circ','Circulation','circ'],['acq','Acquisition','acq'],['ctl','Cataloging','cat'],['rep','Dashboard and Reports','staff'],['usr','Users','admin'],['aud','Audit Log','admin']];
function hue(s){var h=0;for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))%360;return h}
function cover(t){var h=hue(t.title);return 'background:linear-gradient(160deg,hsl('+h+',60%,38%),hsl('+((h+40)%360)+',65%,24%))'}
function note(u,t){if(S.notes.some(function(n){return n.u==u&&n.t==t&&n.d==D(0)}))return;S.notes.unshift({u:u,t:t,d:D(0),r:0});save()}
function myNotes(){return S.notes.filter(function(n){return n.u==U.id})}
function sweep(){var ch=0;S.res.forEach(function(r){if(r.st=='Ready'&&!r.nt){r.nt=1;r.exp=r.exp||D(2);ch=1;note(r.uid,'"'+T(r.tid).title+'" is ready for pickup until '+r.exp+'.')}
 if(r.st=='Ready'&&r.exp&&r.exp<D(0)){r.st='Done';var c=S.copies.filter(function(c){return c.tid==r.tid&&c.status=='On Hold'})[0];if(c)c.status='Available';ch=1;note(r.uid,'Your hold on "'+T(r.tid).title+'" expired.')}});if(ch)save()}
function remind(){myLoans(U.id).forEach(function(l){if(l.ret)return;var t=T(C(l.acc).tid).title;if(l.due<D(0))note(U.id,'OVERDUE: "'+t+'" was due '+l.due+'. Fine of 50 naira per day applies.');else if(l.due<=D(2))note(U.id,'Reminder: "'+t+'" is due on '+l.due+'.')})}
function render(){if(!U&&V!='cat')V='login';if(U){sweep();if(RMu!=U.id){RMu=U.id;remind()}}
 var nb=U?myNotes().filter(function(n){return !n.r}).length:0;
 $('#who').innerHTML=U?'<button class="s bell" onclick="go(\'not\')">🔔'+(nb?'<i>'+nb+'</i>':'')+'</button> '+e(U.name)+' <button class="s" onclick="out()">Logout</button>':'<button class="s" onclick="go(\'login\')">Login / Register</button>';
 $('#nav').innerHTML=NAV.filter(function(n){return show(n[2])&&(n[0]=='cat'||U)}).map(function(n){return '<button class="'+(V==n[0]?'on':'')+'" onclick="go(\''+n[0]+'\')">'+n[1]+'</button>'}).join('');
 var f={cat:vCat,login:vLogin,acct:vAcct,trk:vTrk,seat:vSeat,not:vNot,circ:vCirc,acq:vAcq,ctl:vCtl,rep:vRep,aud:vAud,usr:vUsr,pw:vPw}[V];
 $('#app').innerHTML=f()+(V=='rep'?'<button onclick="csv()">Export circulation CSV</button>':'')+(V=='acct'?'<div class=card><h3>Saved books</h3><div class=row>'+((S.fav[U.id]||[]).map(function(i){return '<button class=chip onclick="openB('+i+')">'+e(T(i).title)+'</button>'}).join('')||'No saved books yet. Open any book and tap Save.')+'</div></div>':'');
 if(V=='cat')rs()}
function vCat(){var pt=S.titles.filter(function(t){return t.pub});SUBS=['All'];pt.forEach(function(t){if(SUBS.indexOf(t.subject)<0)SUBS.push(t.subject)});
 return '<div class=hero><h2>Find your next read</h2><p>Browse '+pt.length+' titles. Tap a book to see details, book a copy and track it.</p><input id=q placeholder="Search title, author, subject or call number" oninput="rs()" value="'+e(Q)+'"></div><div class=stats><div class=stat><b>'+pt.length+'</b>Titles</div><div class=stat><b>'+S.copies.filter(function(c){return c.status=='Available'}).length+'</b>Copies free now</div><div class=stat><b>'+S.users.filter(function(u){return u.role=='patron'}).length+'</b>Members</div></div><div class=chips>'+SUBS.map(function(s,i){return '<button class="chip '+(s==SUB?'on':'')+'" onclick="SUB=SUBS['+i+'];render()">'+e(s)+'</button>'}).join('')+'</div><div class=grid id=rs></div>'}
function rs(){Q=$('#q').value;var q=Q.toLowerCase();var r=S.titles.filter(function(t){return t.pub&&(SUB=='All'||t.subject==SUB)&&(t.title+t.author+t.subject+t.call).toLowerCase().indexOf(q)>-1});
 $('#rs').innerHTML=r.length?r.map(function(t,i){var a=avail(t.id);return '<div class=bk tabindex=0 style="animation-delay:'+i*40+'ms" onclick="openB('+t.id+')" onkeydown="if(event.key===\'Enter\')openB('+t.id+')"><div class=cv style="'+cover(t)+'"><span>'+e(t.title)+'</span>'+img(t)+'</div><div class=i><b>'+e(t.author)+'</b><small>'+e(t.subject)+'</small>'+(a?bd('Available'):bd('On Loan'))+'</div></div>'}).join(''):'<p>No books match your search.</p>'}
function openB(id){var t=T(id),cs=S.copies.filter(function(c){return c.tid==id}),a=avail(id),f=U&&(S.fav[U.id]||[]).indexOf(id)>-1;
 var h='<div class=mb onclick="event.stopPropagation()"><div class=cv style="height:210px;border-radius:10px;'+cover(t)+'"><span>'+e(t.title)+'</span>'+img(t)+'</div><div><h2 style="margin:0">'+e(t.title)+'</h2><p class=m>by '+e(t.author)+' · '+e(t.subject)+'</p>'+bd(a?'Available':t.format=='Reference'?'Reference':'On Loan')+' <small>'+a+' of '+cs.length+' copies free</small><p>Call no: <b>'+e(t.call)+'</b><br>Location: <b>'+e(t.shelf)+'</b><br>Edition: '+e(t.edition||'-')+' · Year: '+e(t.year||'-')+'<br>Department: '+e(t.dept||'-')+'<br>Level: '+e(t.level||'-')+' · Format: '+e(t.format||'Print')+'</p><div class=row>'+(U&&U.role=='patron'?'<button onclick="reserve('+id+')">'+(a?'Book for pickup':'Join queue')+'</button>':U?'':'<button onclick="closeM();go(\'login\')">Login to book</button>')+'<button class=s style="background:var(--gold);color:#222" onclick="fav('+id+')">'+(f?'♥ Saved':'♡ Save')+'</button><button class=s onclick="lab('+id+')">Barcode labels</button></div><h3>Copies</h3>'+tb(['Accession','Status'],cs.map(function(c){return [c.acc,bd(c.status)]}))+'<h3>You may also like</h3><div class=row>'+S.titles.filter(function(x){return x.pub&&x.id!=id&&x.subject==t.subject}).slice(0,3).map(function(x){return '<button class=chip onclick="openB('+x.id+')">'+e(x.title)+'</button>'}).join('')+'</div><button class="s r" onclick="closeM()">Close</button></div></div>';
 closeM();var d=document.createElement('div');d.className='mod';d.id='mod';d.onclick=closeM;d.innerHTML=h;document.body.appendChild(d)}
function closeM(){var x=$('#mod');if(x)x.remove()}
document.onkeydown=function(ev){if(ev.key=='Escape')closeM()};
function fav(id){if(!U)return m('Login to save books');var f=S.fav[U.id]=S.fav[U.id]||[],i=f.indexOf(id);if(i>-1)f.splice(i,1);else f.push(id);save();openB(id)}
function bar(s){var x=4,r='';for(var i=0;i<s.length;i++){var c=s.charCodeAt(i);for(var b=0;b<7;b++){var w=(c>>b&1)?3:1.5;if(b%2==0)r+='<rect x="'+x+'" width="'+w+'" height="40" fill="#000"/>';x+=w+1.5}}return '<svg viewBox="0 0 '+(x+4)+' 40" style="width:100%;max-width:240px">'+r+'</svg>'}
function lab(id){var t=T(id),h='<div class=mb style="display:block" onclick="event.stopPropagation()"><h3>Labels: '+e(t.title)+'</h3>'+S.copies.filter(function(c){return c.tid==id}).map(function(c){return '<div class=lab>'+bar(c.acc)+'<br><b>'+c.acc+'</b> · '+e(t.call)+'</div>'}).join('')+'<button onclick="window.print()">Print</button> <button class="s r" onclick="closeM()">Close</button></div>';$('#mod').innerHTML=h}
function reserve(id){if(T(id).format=='Reference')return m('Reference item: for use inside the library only.');if(!U||U.role!='patron')return m('Login as a student to book');if(S.res.some(function(r){return r.tid==id&&r.uid==U.id&&r.st!='Done'}))return m('You already booked this title');
 var c=S.copies.filter(function(c){return c.tid==id&&c.status=='Available'})[0],r={id:Date.now(),tid:id,uid:U.id,st:'Waiting'};if(c){c.status='On Hold';r.st='Ready'}S.res.push(r);log('reserve '+(c?c.acc:'title '+id));sweep();m(c?'Booked! Collect within 2 days.':'Added to the reservation queue.',1);closeM();render()}
function stp3(a,i){return '<div class=stp>'+a.map(function(s,k){return '<span class="'+(k<=i?'d':'')+'">'+s+'</span>'}).join('')+'</div>'}
function vTrk(){var h='<h2>Track</h2><div class=card><div class=row><input id=tk placeholder="Accession no. (GP-0001) or request no." value="'+e(TK)+'"><button onclick="TK=$(\'#tk\').value.trim();render()">Track</button></div>';
 if(TK){var c=C(TK.toUpperCase()),r=S.reqs.filter(function(x){return x.id==TK})[0];
  if(c)h+='<h3>'+e(T(c.tid).title)+' '+bd(c.status)+'</h3>'+tb(['History'],S.log.filter(function(x){return x.indexOf(c.acc)>-1}).map(function(x){return [e(x)]}));
  else if(r)h+='<h3>'+e(r.title)+' '+bd(r.st)+'</h3>'+stp3(RS,RS.indexOf(r.st));else h+='<p>No match found.</p>'}
 h+='</div>';
 if(U.role=='patron')h+='<div class=card><h3>My loans</h3>'+(myLoans(U.id).map(function(l){return '<p><b>'+e(T(C(l.acc).tid).title)+'</b> · due '+l.due+(!l.ret&&l.due<D(0)?' '+bd('Overdue'):'')+stp3(['Issued','In use','Returned'],l.ret?2:1)+'</p>'}).join('')||'None')+'</div><div class=card><h3>My bookings</h3>'+(S.res.filter(function(x){return x.uid==U.id}).map(function(x){return '<p><b>'+e(T(x.tid).title)+'</b>'+stp3(['Queued','Ready for pickup','Collected'],x.st=='Waiting'?0:x.st=='Ready'?1:2)+'</p>'}).join('')||'None')+'</div>';
 else h+='<div class=card><h3>Purchase requests</h3>'+(S.reqs.map(function(x){return '<p><b>#'+x.id+' '+e(x.title)+'</b> '+bd(x.st)+stp3(RS,RS.indexOf(x.st))+'</p>'}).join('')||'None yet')+'</div>';
 return h}
function vSeat(){var tk=S.seats.filter(function(s){return s.d==SD&&s.sl==SL}).map(function(s){return s.n}),g='';for(var i=1;i<=20;i++)g+='<div class="seat '+(tk.indexOf(i)>-1?'t':i==SN?'m':'')+'" onclick="pick('+i+')">'+i+'</div>';
 return '<h2>Reading Room Seats</h2><div class=card><div class=row><input type=date value="'+SD+'" min="'+D(0)+'" onchange="SD=this.value;SN=0;render()"><select onchange="SL=this.value;SN=0;render()">'+['08:00-10:00','10:00-12:00','12:00-14:00','14:00-16:00'].map(function(x){return '<option'+(x==SL?' selected':'')+'>'+x+'</option>'}).join('')+'</select></div><div class=seats>'+g+'</div><p class=m>Red = taken, blue = your pick.</p><button onclick="bookS()">Book seat'+(SN?' '+SN:'')+'</button></div><div class=card><h3>My seat bookings</h3>'+tb(['Date','Time','Seat',''],S.seats.filter(function(s){return s.u==U.id}).map(function(s){return [s.d,s.sl,s.n,'<button class="s r" onclick="unS('+s.id+')">Cancel</button>']}))+'</div>'}
function pick(i){if(S.seats.some(function(s){return s.d==SD&&s.sl==SL&&s.n==i}))return;SN=i;render()}
function bookS(){if(!SN)return m('Pick a seat first');S.seats.push({id:Date.now(),d:SD,sl:SL,n:SN,u:U.id});note(U.id,'Seat '+SN+' booked for '+SD+', '+SL+'.');log('seat '+SN+' '+SD);SN=0;m('Seat booked',1);render()}
function unS(id){S.seats=S.seats.filter(function(s){return s.id!=id});save();render()}
function vNot(){var n=myNotes(),h='<h2>Notifications</h2><div class=card>'+(n.length?n.map(function(x){return '<p>'+(x.r?'':'<b>NEW</b> ')+e(x.t)+' <small>'+x.d+'</small></p>'}).join(''):'No notifications.')+'</div>';n.forEach(function(x){x.r=1});save();return h}
function csv(){var r=[['Copy','Student','Issued','Due','Returned','Fine']].concat(S.loans.map(function(l){return [l.acc,l.uid,l.out,l.due,l.ret||'',fine(l)]})).map(function(x){return x.join(',')}).join('\n');var a=document.createElement('a');a.href=URL.createObjectURL(new Blob([r],{type:'text/csv'}));a.download='circulation.csv';a.click()}
/* ===== Departments, levels, editions, formats ===== */
var DN=['Accountancy','Business Administration and Management','Office Technology and Management','Computer Science','Computer Engineering Technology','Science Laboratory Technology','Mass Communication','Electrical/Electronic Engineering Technology','Banking and Finance','Statistics','General Studies'],DN2=['All'].concat(DN),DP='All',LV='All',AV=false;
function vCat(){var pt=S.titles.filter(function(t){return t.pub});
 return '<div class=hero><h2>Find your next read</h2><p>Browse '+pt.length+' titles across '+DN.length+' departments. Tap a book to see details, book a copy and track it.</p><input id=q placeholder="Search title, author, subject or call number" oninput="rs()" value="'+e(Q)+'"></div><div class=stats><div class=stat><b>'+pt.length+'</b>Titles</div><div class=stat><b>'+S.copies.filter(function(c){return c.status=='Available'}).length+'</b>Copies free now</div><div class=stat><b>'+S.users.filter(function(u){return u.role=='patron'}).length+'</b>Members</div></div><div class=chips>'+DN2.map(function(s,i){return '<button class="chip '+(s==DP?'on':'')+'" onclick="DP=DN2['+i+'];render()">'+e(s)+'</button>'}).join('')+'</div><div class=row><select onchange="LV=this.value;rs()">'+['All','ND','HND'].map(function(x){return '<option value="'+x+'"'+(x==LV?' selected':'')+'>'+(x=='All'?'All levels':x)+'</option>'}).join('')+'</select><label><input type=checkbox '+(AV?'checked':'')+' onchange="AV=this.checked;rs()"> Available now only</label></div><div class=grid id=rs></div>'}
function rs(){Q=$('#q').value;var q=Q.toLowerCase();var r=S.titles.filter(function(t){return t.pub&&(DP=='All'||(t.depts||[]).indexOf(DP)>-1)&&(LV=='All'||t.level==LV)&&(!AV||avail(t.id))&&(t.title+t.author+t.subject+t.call+(t.dept||'')).toLowerCase().indexOf(q)>-1});
 $('#rs').innerHTML='<p class=m style="grid-column:1/-1">'+r.length+' book'+(r.length==1?'':'s')+' found</p>'+r.map(function(t,i){var a=avail(t.id);return '<div class=bk tabindex=0 style="animation-delay:'+Math.min(i,12)*35+'ms" onclick="openB('+t.id+')" onkeydown="if(event.key===\'Enter\')openB('+t.id+')"><div class=cv style="'+cover(t)+'"><span>'+e(t.title)+'</span>'+img(t)+'</div><div class=i><b>'+e(t.author)+'</b><small>'+e(t.level||'')+' · '+e((t.dept||'').split(' / ')[0])+'</small>'+(a?bd('Available'):bd(t.format=='Reference'?'Reference':'On Loan'))+'</div></div>'}).join('')}
function opts(a,id){return '<select id="'+id+'">'+a.map(function(x){return '<option>'+e(x)+'</option>'}).join('')+'</select>'}
function vCtl(){var q=S.titles.filter(function(t){return !t.pub});return '<h2>Cataloging</h2><p class=m>Newly received items waiting for classification.</p>'+(q.length?q.map(function(t){var i=t.id;return '<div class=card><b>'+e(t.title)+'</b> by '+e(t.author)+'<div class=row style="margin-top:8px"><input id=s'+i+' placeholder="Subject"><input id=d'+i+' placeholder="Dewey no."><input id=h'+i+' placeholder="Shelf"><input id=e'+i+' placeholder="Edition"><input id=y'+i+' type=number placeholder="Year" style="width:90px">'+opts(DN,'p'+i)+opts(['ND','HND'],'l'+i)+opts(['Print','Reference','E-book'],'f'+i)+'<button class=g onclick="pub('+i+')">Classify and publish</button></div></div>'}).join(''):'<div class=card>No items awaiting cataloging.</div>')}
function pub(id){var t=T(id),g=function(p){return $('#'+p+id).value.trim()},s=g('s'),d=g('d'),h=g('h');if(!s||!d||!h)return m('Enter subject, Dewey number and shelf');t.subject=s;t.dewey=d;t.shelf=h;t.edition=g('e');t.year=g('y');t.dept=g('p');t.depts=[t.dept];t.level=g('l');t.format=g('f');t.call=d+' '+(t.author||'XXX').split(' ').pop().slice(0,3).toUpperCase();t.pub=true;S.copies.forEach(function(c){if(c.tid==id&&c.status=='Awaiting Cataloging')c.status=t.format=='Reference'?'Reference-Only':'Available'});log('cataloged '+t.title+' '+t.call);m('Published to the catalogue',1);render()}
/* ===== Logo fallback, static palette covers, online book cover images ===== */
var LOGO2='https://gracepolytechnic.edu.ng/wp-content/uploads/2014/10/gracepolylogo-1.jpg',LOGO3="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='30' fill='%23274c77'/%3E%3Ctext x='32' y='40' font-size='24' text-anchor='middle' fill='%23e7ecef' font-family='Georgia' font-weight='bold'%3EGP%3C/text%3E%3C/svg%3E";
function lf(i){if(!i.f){i.f=1;i.src=LOGO2}else{i.onerror=null;i.src=LOGO3}}
function cover(t){return 'background:'+(hue(t.title)%2?'#274c77;color:#e7ecef':'#a3cef1;color:#274c77')+';text-shadow:none'}
var CC={},busy=0;try{CC=JSON.parse(localStorage.getItem('gpcov'))||{}}catch(_){}
function img(t){return '<img alt="" loading=lazy data-t="'+t.id+'" onerror="this.remove()"'+(CC[t.id]?' src="'+CC[t.id]+'"':'')+'>'}
async function loadCovers(){if(busy)return;busy=1;var l=[].slice.call(document.querySelectorAll('img[data-t]:not([src])'));
 for(var i=0;i<l.length;i++){var im=l[i],t=T(im.dataset.t);if(!t||CC[t.id]===0)continue;
  try{var au=t.author.split(/,| and | et al/)[0].trim(),u='https://openlibrary.org/search.json?limit=1&fields=cover_i&title='+encodeURIComponent(t.title)+'&author='+encodeURIComponent(au),d=await(await fetch(u)).json(),c=d.docs&&d.docs[0]&&d.docs[0].cover_i;
   if(c){CC[t.id]='https://covers.openlibrary.org/b/id/'+c+'-M.jpg';im.src=CC[t.id];try{localStorage.setItem('gpcov',JSON.stringify(CC))}catch(_){}}else CC[t.id]=0}catch(_){break}}busy=0}
var _rs=rs,_ob=openB;rs=function(){_rs();loadCovers()};openB=function(id){_ob(id);loadCovers()};
/* ===== Accounts, session and optional cloud sync ===== */
function lv(t){return /Introduc|Fundamentals|Principles|Essentials|Starting|Business Accounting 2|Digital Design|^Chemistry$|^Biology$|Physics|^Management$|Electronic Devices|Electrical Circuit|Textbook|Office|Dynamics|News Reporting|Understanding Media|Technical Comm|Research Design|Records|Data Comm|Python|Java/.test(t)?'ND':'HND'}
function fix(){S.titles.forEach(function(t){if(t.level=='ND/HND')t.level=lv(t.title)});S.users.forEach(function(u){if(/^Ada Okoro/.test(u.name))u.name=u.name.replace('Ada Okoro','Taibat Taiwo Adekoya')})}
function save(){try{localStorage.setItem(K,JSON.stringify(S))}catch(_){}push()}
function ru(){return SYNC_URL.replace(/\/$/,'')+'/gpolss.json'}
function push(){if(!SYNC_URL)return;clearTimeout(syncT);syncT=setTimeout(async function(){try{var d=await(await fetch(ru())).json();if(d&&d.users)d.users.forEach(function(u){if(!S.users.some(function(x){return x.id==u.id}))S.users.push(u)});await fetch(ru(),{method:'PUT',body:JSON.stringify(S)})}catch(_){}},800)}
async function pull(){if(!SYNC_URL)return;try{var d=await(await fetch(ru())).json();if(!d){push();return}
 var loc=S.users;S=d;['titles','copies','users','loans','res','reqs','log','notes','seats'].forEach(function(k){S[k]=S[k]||[]});S.fav=S.fav||{};S.n=S.n||1;
 loc.forEach(function(u){if(!S.users.some(function(x){return x.id==u.id}))S.users.push(u)});fix();if(U)U=S.users.filter(function(x){return x.id==U.id})[0]||null;try{localStorage.setItem(K,JSON.stringify(S))}catch(_){}}catch(_){}}
function nid(s){return String(s).trim().toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
async function hp(p){try{var b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode('gp|'+p));return [].map.call(new Uint8Array(b),function(x){return ('0'+x.toString(16)).slice(-2)}).join('')}catch(_){var h=5381;for(var i=0;i<p.length;i++)h=(h*33^p.charCodeAt(i))>>>0;return 'x'+h}}
function startS(u){U=u;try{localStorage.setItem('gpses',u.id)}catch(_){}log('login');V=u.role=='patron'?'acct':u.role=='cat'?'ctl':u.role=='acq'?'acq':u.role=='circ'?'circ':'rep';render()}
async function login(){m('Checking...',1);await pull();var u=S.users.filter(function(x){return x.id==nid($('#lu').value)})[0],pw=$('#lp').value;if(!u||!(u.ph?u.ph==await hp(pw):u.pw==pw))return m('Wrong username or password');if(u.ok===false)return m('This account is suspended. Please see the librarian.');startS(u)}
async function reg(){var n=$('#rn').value.trim(),raw=$('#ri').value.trim(),id=nid(raw),p=$('#rp').value,em=$('#rm').value.trim();
 if(!n||!id||!em||p.length<6)return m('Fill every field (password 6+ characters)');if(!/^\S+@\S+\.\S+$/.test(em))return m('Enter a valid email');if(p!=$('#rp2').value)return m('Passwords do not match');
 await pull();if(S.users.some(function(x){return x.id==id}))return m('That ID is already registered. Please login.');
 var u={id:id,name:n,role:'patron',matric:raw,dept:$('#rd').value,level:$('#rl').value,email:em,ph:await hp(p),ok:true,created:D(0)};S.users.push(u);log('registered '+id);save();m('Account created. Welcome!',1);startS(u)}
function out(){U=null;V='cat';try{localStorage.removeItem('gpses')}catch(_){}render()}
function vLogin(){return '<div class=card><h2>Login</h2><p class=m>Demo accounts (password 1234): admin, acq, cat, circ, student</p><div class=row><input id=lu placeholder="Username or Matric / Staff ID"><input id=lp type=password placeholder="Password"><button onclick="login()">Login</button></div></div><div class=card><h2>Create a student account</h2><div class=row><input id=rn placeholder="Full name"><input id=ri placeholder="Matric / Staff ID"><input id=rm type=email placeholder="Email"></div><div class=row>'+opts(DN,'rd')+opts(['ND','HND','Staff'],'rl')+'<input id=rp type=password placeholder="Password (6+ characters)"><input id=rp2 type=password placeholder="Confirm password"><button onclick="reg()">Create account</button></div><p class=m>'+(SYNC_URL?'Cloud sync is ON: your account works on any device.':'Local mode: accounts are saved in this browser only. See README.txt to turn on cloud sync.')+'</p></div>'}
var _va=vAcct;vAcct=function(){return _va().replace('<h2>My Account</h2>','<h2>My Account</h2><div class=card><b>'+e(U.name)+'</b><br>ID: '+e(U.matric||U.id)+(U.dept?' · '+e(U.dept):'')+(U.level?' · '+e(U.level):'')+(U.email?'<br>'+e(U.email):'')+'</div>')};
function boot(){fix();save();render();pull().then(function(){var sid='';try{sid=localStorage.getItem('gpses')}catch(_){}if(!U&&sid){U=S.users.filter(function(x){return x.id==sid&&x.ok!==false})[0]||null;if(U)V=U.role=='patron'?'acct':'cat'}render()})}
/* ===== School-portal style login / sign-up front page ===== */
var LOGO1='https://gracepolytechnic.edu.ng/wp-content/uploads/2020/06/cropped-gracepolylogo-270x270.png',PT='in';
var DEMOS=[['🎓 Taibat Taiwo Adekoya (Student)','goldentwin608@gmail.com'],['📖 Librarian','circ'],['🗂 Cataloguer','cat'],['🛒 Acquisition','acq'],['🛠 Admin','admin']];
function fld(ic,inner){return '<div class=fld><b>'+ic+'</b>'+inner+'</div>'}
function portalHTML(){var n=S.titles.filter(function(t){return t.pub}).length;
 return '<img class=wm alt="" src="'+LOGO1+'" onerror="lf(this)"><div class=shell><div class=side><img class=lg alt="Grace Polytechnic logo" src="'+LOGO1+'" onerror="lf(this)"><h1>Grace Polytechnic Online Library Services System</h1><small>Surulere, Lagos · Library Portal</small><ul><li><span>🔎</span>Search '+n+' books across '+DN.length+' departments</li><li><span>📚</span>Book a copy for pickup in one tap</li><li><span>📍</span>Track loans, fines and requests</li><li><span>💺</span>Reserve a reading-room seat</li></ul></div>'+
 '<div class=form><div class=tabs id=ptabs><i></i><button class=on onclick="ptab(\'in\')">Login</button><button onclick="ptab(\'up\')">Sign up</button></div>'+
 '<div class="pane on" id=pin><h2>Welcome back</h2><p class=m>Sign in to your library account.</p>'+fld('👤','<input id=lu placeholder="Matric / Staff ID or username" autocomplete=username>')+fld('🔒','<input id=lp type=password placeholder="Password" autocomplete=current-password><button class=eye type=button onclick="eye(\'lp\',this)">👁</button>')+'<label class=m><input type=checkbox id=lk checked> Keep me signed in</label><button class=lnk onclick=\"ptab(\'fg\')\" style=\"float:right\">Forgot password?</button><button class=cta id=bin onclick="pLogin()">Login →</button><p class=m style="margin:4px 0">Quick demo access:</p><div class=demo>'+DEMOS.map(function(d){return '<button onclick="demo(\''+d[1]+'\')">'+d[0]+'</button>'}).join('')+'</div></div>'+
 '<div class=pane id=pup><h2>Create your account</h2><p class=m>Join the library in under a minute.</p>'+fld('🧑','<input id=rn placeholder="Full name">')+'<div class=two>'+fld('🪪','<input id=ri placeholder="Matric / Staff ID">')+fld('✉️','<input id=rm type=email placeholder="Email">')+fld('🏫',opts(DN,'rd'))+fld('🎓',opts(['ND','HND','Staff'],'rl'))+'</div>'+fld('🔒','<input id=rp type=password placeholder="Password (6+ characters)" oninput="sb(this.value)"><button class=eye type=button onclick="eye(\'rp\',this)">👁</button>')+'<div class=sb><i id=sbi></i></div><small class=m id=sbt>Choose a strong password</small>'+fld('🔐','<input id=rp2 type=password placeholder="Confirm password">')+'<button class=cta id=bup onclick="pReg()">Create account →</button></div>'+
 pfgHTML()+'<p style="text-align:center;margin:0"><button class=lnk onclick="V=\'cat\';render()">Browse the catalogue as a guest</button></p><small class=m style="display:block;text-align:center">'+(SYNC_URL?'Cloud sync ON':'Local mode: accounts saved on this device')+' · © Grace Polytechnic Library</small></div></div>'}
function showPortal(){document.body.classList.add('pt');var p=$('#portal');if(!p){p=document.createElement('div');p.id='portal';p.innerHTML=portalHTML();document.body.appendChild(p)}}
function hidePortal(){document.body.classList.remove('pt');wm2();var p=$('#portal');if(p)p.remove()}
function ptab(t){PT=t;$('#ptabs').className='tabs'+(t=='up'?' up':'');[].forEach.call(document.querySelectorAll('#ptabs button'),function(b,i){b.className=i==(t=='up'?1:0)?'on':''});$('#pin').className='pane'+(t=='in'?' on':'');$('#pup').className='pane'+(t=='up'?' on':'')}
function eye(id,b){var i=$('#'+id);i.type=i.type=='password'?'text':'password';b.textContent=i.type=='password'?'👁':'🙈'}
function sb(p){var s=0;if(p.length>=6)s++;if(p.length>=10)s++;if(/[a-z]/.test(p)&&/[A-Z]/.test(p))s++;if(/\d/.test(p))s++;if(/[^A-Za-z0-9]/.test(p))s++;var b=$('#sbi');b.style.width=s*20+'%';b.style.background=s<3?'#c62828':s<5?'#f9a825':'#2e7d32';$('#sbt').textContent=p?(s<3?'Weak':s<5?'Fair':'Strong'):'Choose a strong password'}
function shk(){var f=document.querySelector('.form');if(!f)return;f.classList.remove('shake');void f.offsetWidth;f.classList.add('shake')}
async function pLogin(){var b=$('#bin');b.innerHTML='<span class=spin></span> Signing in...';b.disabled=true;await login();b=$('#bin');if(b){b.disabled=false;b.innerHTML='Login →';if(!U)shk()}}
async function pReg(){var b=$('#bup');b.innerHTML='<span class=spin></span> Creating...';b.disabled=true;await reg();b=$('#bup');if(b){b.disabled=false;b.innerHTML='Create account →';if(!U)shk()}}
function demo(u){$('#lu').value=u;$('#lp').value='1234';setTimeout(pLogin,250)}
document.addEventListener('keydown',function(ev){if(ev.key=='Enter'&&$('#portal')&&ev.target.tagName!='BUTTON')PT=='up'?pReg():pLogin()});
function startS(u){U=u;var k=$('#lk');try{(k&&!k.checked?sessionStorage:localStorage).setItem('gpses',u.id)}catch(_){}log('login');V=u.role=='patron'?'acct':u.role=='cat'?'ctl':u.role=='acq'?'acq':u.role=='circ'?'circ':'rep';m(u.mc?'Please set a new password to continue':'Welcome, '+u.name.replace(/ \(.*\)/,''),1);if(u.mc)V='pw';render()}
function out(){U=null;V='login';try{localStorage.removeItem('gpses');sessionStorage.removeItem('gpses')}catch(_){}render()}
var _r=render;render=function(){if(!U&&V!='cat'){V='login';showPortal();return}hidePortal();if(U&&U.mc)V='pw';_r()};
function rest(){var sid='';try{sid=localStorage.getItem('gpses')||sessionStorage.getItem('gpses')}catch(_){}if(!U&&sid){U=S.users.filter(function(x){return x.id==sid&&x.ok!==false})[0]||null;if(U)V=U.mc?'pw':U.role=='patron'?'acct':'cat'}}
function boot(){fix();save();V='login';rest();render();pull().then(function(){rest();render()})}
/* ===== Admin: Users management ===== */
var UQ='',UR='All',UDEL='',UM='';
function usr(id){return S.users.filter(function(x){return x.id==id})[0]}
var RN={admin:'Administrator',acq:'Acquisition Officer',cat:'Cataloguer',circ:'Circulation Officer',patron:'Student'};
function uTable(){var q=UQ.toLowerCase(),r=S.users.filter(function(u){return (UR=='All'||u.role==UR)&&(u.id+u.name+(u.email||'')+(u.dept||'')+(u.matric||'')).toLowerCase().indexOf(q)>-1});
 return tb(['Name','ID','Role','Dept / Level','Email','Status','Loans / Fines','Actions'],r.map(function(u){var me=u.id==U.id,ol=myLoans(u.id).filter(function(l){return !l.ret}).length,fo=myLoans(u.id).reduce(function(s,l){return s+(l.paid?0:fine(l))},0),on=u.ok!==false;
  return [e(u.name),e(u.matric||u.id),'<select onchange="uRole(\''+u.id+'\',this.value)"'+(me?' disabled':'')+'>'+Object.keys(RN).map(function(k){return '<option value="'+k+'"'+(k==u.role?' selected':'')+'>'+RN[k]+'</option>'}).join('')+'</select>',e((u.dept||'-')+' / '+(u.level||'-')),e(u.email||'-'),'<span class="b '+(on?'Available':'Overdue')+'">'+(on?'Active':'Suspended')+'</span>',ol+' open / ₦'+fo,
  me?'<small>This is you</small>':'<button class="s '+(on?'r':'g')+'" onclick="uTog(\''+u.id+'\')">'+(on?'Suspend':'Activate')+'</button> <button class=s onclick="uPw(\''+u.id+'\')">Reset password</button> <button class="s r" onclick="uDel(\''+u.id+'\')">'+(UDEL==u.id?'Confirm delete?':'Delete')+'</button>']}))}
function ur(){UQ=$('#uq').value;UR=$('#ur').value;$('#ul').innerHTML=uTable()}
function vUsr(){var p=S.users.filter(function(u){return u.role=='patron'}).length,sp=S.users.filter(function(u){return u.ok===false}).length;
 return '<h2>User Management</h2>'+(UM?'<div class=card><b>'+e(UM)+'</b> <button class=s onclick="UM=\'\';render()">Dismiss</button></div>':'')+'<div class=stats><div class=stat><b>'+S.users.length+'</b>Total accounts</div><div class=stat><b>'+p+'</b>Students</div><div class=stat><b>'+(S.users.length-p)+'</b>Staff</div><div class=stat><b>'+sp+'</b>Suspended</div></div>'+
 '<div class=card style="margin-top:14px"><h3>Add an account</h3><div class=row><input id=an placeholder="Full name"><input id=ai placeholder="Username / ID"><input id=ae type=email placeholder="Email (optional)"><select id=ar>'+Object.keys(RN).map(function(k){return '<option value="'+k+'">'+RN[k]+'</option>'}).join('')+'</select><input id=ap type=password placeholder="Password (6+ chars)"><button onclick="uAdd()">Add account</button></div></div>'+
 '<div class=card><div class=row><input id=uq placeholder="Search name, ID, email or department" value="'+e(UQ)+'" oninput="ur()" style="flex:1;min-width:200px"><select id=ur onchange="ur()">'+['All'].concat(Object.keys(RN)).map(function(k){return '<option value="'+k+'"'+(k==UR?' selected':'')+'>'+(k=='All'?'All roles':RN[k])+'</option>'}).join('')+'</select></div><div id=ul>'+uTable()+'</div></div>'}
async function uAdd(){var n=$('#an').value.trim(),id=nid($('#ai').value),p=$('#ap').value;if(!n||!id||p.length<6)return m('Enter name, ID and a password of 6+ characters');if(usr(id))return m('That ID already exists');
 S.users.push({id:id,name:n,role:$('#ar').value,matric:$('#ai').value.trim(),email:$('#ae').value.trim(),ph:await hp(p),ok:true,created:D(0)});log('added account '+id);save();m('Account added',1);render()}
function uTog(id){var u=usr(id);if(id==U.id)return m('You cannot suspend yourself');u.ok=u.ok===false;log((u.ok?'activated ':'suspended ')+id);save();m(u.ok?'Account activated':'Account suspended',1);render()}
function uRole(id,r){if(id==U.id)return m('You cannot change your own role');usr(id).role=r;log('role '+id+' to '+r);save();m('Role updated',1);render()}
async function uPw(id){var t='Grace'+(1000+Math.floor(Math.random()*9000)),u=usr(id);u.ph=await hp(t);delete u.pw;u.mc=true;log('password reset '+id);save();UM='Temporary password for '+u.name+': '+t+' They will be asked to choose a new password when they log in.';render()}
function uDel(id){if(id==U.id)return m('You cannot delete yourself');if(UDEL!=id){UDEL=id;render();return}
 if(myLoans(id).some(function(l){return !l.ret})){UDEL='';render();return m('This user still has books on loan. Return them first, or suspend instead.')}
 S.res.forEach(function(r){if(r.uid==id&&r.st!='Done'){if(r.st=='Ready'){var c=S.copies.filter(function(c){return c.tid==r.tid&&c.status=='On Hold'})[0];if(c)c.status='Available'}r.st='Done'}});
 S.users=S.users.filter(function(x){return x.id!=id});UDEL='';log('deleted account '+id);save();m('Account deleted',1);render()}
/* ===== v7: change password, forgot password, student wording, logo underlay ===== */
function home(u){return u.role=='patron'?'acct':u.role=='cat'?'ctl':u.role=='acq'?'acq':u.role=='circ'?'circ':'rep'}
var _fx=fix;fix=function(){_fx();fix2()};
function fix2(){var u=S.users.filter(function(x){return x.id=='student'})[0];if(!u)return;var N='goldentwin608-gmail-com';u.id=N;u.matric='goldentwin608@gmail.com';u.email='goldentwin608@gmail.com';u.pw='Taiwo2026';delete u.ph;
 S.loans.forEach(function(l){if(l.uid=='student')l.uid=N});S.res.forEach(function(r){if(r.uid=='student')r.uid=N});S.notes.forEach(function(n){if(n.u=='student')n.u=N});S.seats.forEach(function(s){if(s.u=='student')s.u=N});if(S.fav&&S.fav.student){S.fav[N]=S.fav.student;delete S.fav.student}}
function vPw(){return '<h2>Change Password</h2>'+(U.mc?'<div class=card><b>Your password was reset by the administrator. Please set a new password to continue.</b></div>':'')+'<div class=card style="max-width:460px">'+fld('🔑','<input id=pc type=password placeholder="Current (or temporary) password">')+fld('🔒','<input id=pn type=password placeholder="New password (6+ characters)" oninput="sb(this.value)">')+'<div class=sb><i id=sbi></i></div><small class=m id=sbt>Choose a strong password</small>'+fld('🔐','<input id=pn2 type=password placeholder="Confirm new password">')+'<button class=cta onclick="cpw()">Update password</button></div>'}
async function cpw(){var c=$('#pc').value,n=$('#pn').value;if(n.length<6)return m('New password must be 6+ characters');if(n!=$('#pn2').value)return m('Passwords do not match');if(!(U.ph?U.ph==await hp(c):U.pw==c))return m('Current password is wrong');if(n==c)return m('Choose a different password');
 U.ph=await hp(n);delete U.pw;U.mc=false;log('password changed');save();m('Password updated',1);V=home(U);render()}
function pfgHTML(){return '<div class=pane id=pfg><h2>Reset your password</h2><p class=m>Enter your Matric / Staff ID and the email you registered with.</p>'+fld('🪪','<input id=fi placeholder="Matric / Staff ID or username">')+fld('✉️','<input id=fe type=email placeholder="Registered email">')+fld('🔒','<input id=fp type=password placeholder="New password (6+ characters)">')+fld('🔐','<input id=fp2 type=password placeholder="Confirm new password">')+'<button class=cta id=bfg onclick="pFg()">Reset password →</button><button class=lnk onclick="ptab(\'in\')">← Back to login</button></div>'}
async function pFg(){var id=nid($('#fi').value),em=$('#fe').value.trim().toLowerCase(),p=$('#fp').value;if(!id||!em||p.length<6){shk();return m('Fill every field (password 6+ characters)')}if(p!=$('#fp2').value){shk();return m('Passwords do not match')}
 await pull();var u=usr(id);if(!u||!u.email||u.email.toLowerCase()!=em){shk();return m('That ID and email do not match any account')}if(u.ok===false)return m('This account is suspended');
 u.ph=await hp(p);delete u.pw;u.mc=false;log('password reset by user '+id);save();m('Password reset. You can now log in.',1);var v=$('#fi').value;ptab('in');$('#lu').value=v}
function ptab(t){PT=t;$('#ptabs').className='tabs'+(t=='up'?' up':'');[].forEach.call(document.querySelectorAll('#ptabs button'),function(b,i){b.className=i==(t=='up'?1:0)?'on':''});['in','up','fg'].forEach(function(k){$('#p'+k).className='pane'+(t==k?' on':'')})}
function demo(u){$('#lu').value=u;$('#lp').value=u=='goldentwin608@gmail.com'?'Taiwo2026':'1234';setTimeout(pLogin,250)}
function wm2(){if(!$('#wm2')){var i=document.createElement('img');i.id='wm2';i.className='wm2';i.alt='';i.src=LOGO1;i.onerror=function(){lf(i)};document.body.appendChild(i)}}
boot();
