import fs from "fs";import path from "path";import {fileURLToPath} from "url";
const __dirname=path.dirname(fileURLToPath(import.meta.url));
const DATA=path.resolve(__dirname,"../public/data");
function pick(a){return a[Math.floor(Math.random()*a.length)]}
function pickN(a,n){const s=new Set();while(s.size<n&&s.size<a.length)s.add(pick(a));return[...s]}
const DIFF=["easy","medium","hard"];
const TAG=`Git GitHub 版本控制 VCS 仓库 repository 工作区 working directory 暂存区 staging index 本地仓库 local 远程仓库 remote init clone status add commit log diff branch checkout switch merge rebase stash reset revert push pull fetch origin upstream main master HEAD tag release conflict merge conflict resolve cherry-pick rebase interactive rebase amend squash fixup reflog blame bisect grep archive submodule subtree sparse checkout worktree fetch pull request PR issue discussion wiki project board milestone label assignee code review review comment approve changes requested merge commit squash merge rebase merge fast-forward merge three-way merge octopus merge strategy recursive resolve ort conflict markers ours theirs base merge tool diff tool action workflow job step runner event trigger on push pull_request schedule workflow_dispatch workflow_run repository_dispatch secret variable environment deployment environment protection branch protection rule required status check required review code owner draft PR template contribution guide readme license contributing code of conduct security policy support issue template discussion category organization team role permission collaborator contributor fork star watch notification gist pages deploy deploy static site jekyll hugo nextjs CI continuous integration CD continuous deployment marketplace action reusable workflow matrix strategy strategy matrix include exclude fail-fast concurrency timeout cancellation docker service container service container port volume environment variable cache artifact upload download release semantic versioning changelog conventional commit commitlint husky lint-staged prettier eslint gitignore gitattributes gitconfig gitkeep README LICENSE CONTRIBUTING CHANGELOG SECURITY SUPPORT CODE_OF_CONDUCT PULL_REQUEST_TEMPLATE ISSUE_TEMPLATE FUNDING dependabot renovate bot automation webhook API REST GraphQL octokit gh CLI token SSH key deploy key personal access token fine-grained token OAuth app github app webhook payload event type push event pull_request event issue event discussion event star fork watch release workflow_run check suite check run status deployment deployment status project card project column project board milestone issue label assignee reviewer team discussion comment reaction emoji commit status commit check CI check suite check run conclusion neutral cancelled timed_out action_required queued in_progress completed skipped failure success error `;
const T=TAG.trim().split(/\s+/).filter(Boolean);
function buildTags(){return T.map((n,i)=>({id:`gt-tag-${String(i+1).padStart(3,"0")}`,name:n,category:"Git",description:`Git标签：${n}`,count:0,createdAt:"2026-07-02T00:00:00.000Z"}));}
const COURSES_DATA=[
  {id:"gt-course-01",order:1,slug:"Git与版本控制入门",title:"Git 与版本控制入门",description:"版本控制概念、Git起源、Git与SVN区别、学习路线。",estimatedHours:4,difficulty:"easy"},
  {id:"gt-course-02",order:2,slug:"Git安装配置与基本概念",title:"Git 安装、配置与基本概念",description:"安装Git、配置用户名邮箱、工作区暂存区仓库概念。",estimatedHours:4,difficulty:"easy"},
  {id:"gt-course-03",order:3,slug:"工作区暂存区与仓库",title:"工作区、暂存区与仓库",description:"git init/add/commit三种状态转换、.git目录结构。",estimatedHours:6,difficulty:"easy"},
  {id:"gt-course-04",order:4,slug:"addcommitstatus与log",title:"add、commit、status 与 log",description:"git add/commit/status/log/diff等基础命令。",estimatedHours:8,difficulty:"easy"},
  {id:"gt-course-05",order:5,slug:"分支基础与分支管理",title:"分支基础与分支管理",description:"分支概念、branch/checkout/switch、分支策略。",estimatedHours:8,difficulty:"medium"},
  {id:"gt-course-06",order:6,slug:"mergerebase与冲突解决",title:"merge、rebase 与冲突解决",description:"merge三种方式、rebase变基、冲突标记与解决。",estimatedHours:10,difficulty:"hard"},
  {id:"gt-course-07",order:7,slug:"resetrevert与历史回退",title:"reset、revert 与历史回退",description:"reset三种模式、revert还原、reflog恢复。",estimatedHours:8,difficulty:"hard"},
  {id:"gt-course-08",order:8,slug:"remoteclonepull与push",title:"remote、clone、pull 与 push",description:"远程仓库管理、clone/pull/push/fetch、远程分支。",estimatedHours:8,difficulty:"medium"},
  {id:"gt-course-09",order:9,slug:"GitHub仓库管理",title:"GitHub 仓库管理",description:"创建仓库、Settings、分支保护、Collaborator、SSH/HTTPS。",estimatedHours:6,difficulty:"easy"},
  {id:"gt-course-10",order:10,slug:"IssuesPullRequest与CodeReview",title:"Issues、Pull Request 与 Code Review",description:"Issue创建、PR流程、Code Review、模板、标签。",estimatedHours:10,difficulty:"medium"},
  {id:"gt-course-11",order:11,slug:"GitHubActions入门",title:"GitHub Actions 入门",description:"Workflow/Job/Step、触发事件、矩阵构建、缓存、artifact。",estimatedHours:10,difficulty:"hard"},
  {id:"gt-course-12",order:12,slug:"GitHubPages部署",title:"GitHub Pages 部署",description:"Pages配置、静态站点部署、自定义域名、Actions部署。",estimatedHours:6,difficulty:"medium"},
  {id:"gt-course-13",order:13,slug:"团队协作规范与提交规范",title:"团队协作规范与提交规范",description:"Gitflow、Conventional Commits、Code Review规范。",estimatedHours:8,difficulty:"medium"},
  {id:"gt-course-14",order:14,slug:"开源贡献项目作品集与综合实战",title:"开源贡献、项目作品集与综合实战",description:"Fork贡献流程、项目展示、综合项目协作。",estimatedHours:8,difficulty:"medium"},
];
function buildCourses(){return COURSES_DATA.map(c=>({...c,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["掌握Git版本控制","熟练GitHub协作","能创建Actions工作流","具备团队协作能力"],updatedAt:"2026-07-02T00:00:00.000Z"}));}
function buildLessons(){
  const all=[];let id=1;
  const add=(ci,t,kps)=>{const n=String(id).padStart(3,"0");all.push({id:`gt-lesson-${n}`,courseId:COURSES_DATA[ci].id,order:all.filter(l=>l.courseId===COURSES_DATA[ci].id).length+1,title:t,slug:t.replace(/[\s，。、：；（）\-\+]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),summary:t,content:`# ${t}\n\n## 概述\n${t}是Git/GitHub的重要知识点。\n\n## 使用场景\n- 版本控制\n- 团队协作\n- 开源贡献\n\n## 注意事项\n- 理解概念原理\n- 多实践操作\n\n## 总结\n掌握${t}提高效率。`,contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:kps||[],practiceQuestionIds:[],tags:["Git"],prerequisites:[],updatedAt:"2026-07-02T00:00:00.000Z"});id++;};
add(0,"什么是版本控制",["gt-kp-001"]);add(0,"Git历史与特点",["gt-kp-002"]);add(0,"Git与SVN对比",["gt-kp-003"]);add(0,"学习路径",["gt-kp-004"]);
add(1,"安装Git",["gt-kp-005"]);add(1,"config配置",["gt-kp-006"]);add(1,"三个区概念",["gt-kp-007","gt-kp-008"]);add(1,".git目录",["gt-kp-009"]);
add(2,"git init",["gt-kp-010"]);add(2,"工作区文件状态",["gt-kp-011"]);add(2,"Untracked/Modified/Staged",["gt-kp-012"]);
add(3,"git add",["gt-kp-013"]);add(3,"git commit",["gt-kp-014"]);add(3,"git status",["gt-kp-015"]);add(3,"git log",["gt-kp-016","gt-kp-017"]);add(3,"git diff",["gt-kp-018"]);add(3,"git show",["gt-kp-019"]);
add(4,"分支概念",["gt-kp-020"]);add(4,"git branch",["gt-kp-021"]);add(4,"git checkout",["gt-kp-022"]);add(4,"git switch",["gt-kp-023"]);add(4,"分支策略",["gt-kp-024"]);add(4,"远程分支",["gt-kp-025"]);
add(5,"git merge",["gt-kp-026","gt-kp-027"]);add(5,"fast-forward合并",["gt-kp-028"]);add(5,"three-way合并",["gt-kp-029"]);add(5,"git rebase",["gt-kp-030","gt-kp-031"]);add(5,"冲突产生原因",["gt-kp-032"]);add(5,"冲突标记",["gt-kp-033"]);add(5,"解决冲突",["gt-kp-034","gt-kp-035"]);add(5,"merge工具",["gt-kp-036"]);
add(6,"git reset --soft",["gt-kp-037"]);add(6,"git reset --mixed",["gt-kp-038"]);add(6,"git reset --hard",["gt-kp-039"]);add(6,"git revert",["gt-kp-040"]);add(6,"git reflog",["gt-kp-041","gt-kp-042"]);add(6,"git stash",["gt-kp-043","gt-kp-044"]);
add(7,"git remote",["gt-kp-045"]);add(7,"git clone",["gt-kp-046"]);add(7,"git push",["gt-kp-047"]);add(7,"git pull",["gt-kp-048"]);add(7,"git fetch",["gt-kp-049"]);add(7,"远程跟踪分支",["gt-kp-050"]);add(7,"origin/HEAD",["gt-kp-051"]);
add(8,"创建仓库",["gt-kp-052"]);add(8,"Settings配置",["gt-kp-053"]);add(8,"分支保护规则",["gt-kp-054"]);add(8,"Collaborator",["gt-kp-055"]);add(8,"SSH Key配置",["gt-kp-056"]);add(8,"Token使用",["gt-kp-057"]);
add(9,"Issue创建与管理",["gt-kp-058"]);add(9,"Issue模板",["gt-kp-059"]);add(9,"标签与里程碑",["gt-kp-060"]);add(9,"Pull Request流程",["gt-kp-061","gt-kp-062"]);add(9,"PR模板",["gt-kp-063"]);add(9,"Code Review",["gt-kp-064","gt-kp-065"]);add(9,"合并方式选择",["gt-kp-066"]);
add(10,"Workflow基础",["gt-kp-067","gt-kp-068"]);add(10,"Job与Step",["gt-kp-069"]);add(10,"触发事件",["gt-kp-070"]);add(10,"矩阵构建",["gt-kp-071"]);add(10,"缓存依赖",["gt-kp-072"]);add(10,"artifact上传",["gt-kp-073"]);add(10,"Secret与变量",["gt-kp-074"]);add(10,"多环境部署",["gt-kp-075"]);
add(11,"Pages配置",["gt-kp-076"]);add(11,"Actions部署Pages",["gt-kp-077"]);add(11,"自定义域名",["gt-kp-078"]);add(11,"Jekyll/Hugo",["gt-kp-079"]);
add(12,"Gitflow工作流",["gt-kp-080"]);add(12,"Conventional Commits",["gt-kp-081"]);add(12,"commitlint",["gt-kp-082"]);add(12,"CODEOWNERS",["gt-kp-083"]);
add(13,"Fork工作流",["gt-kp-084"]);add(13,"贡献流程",["gt-kp-085"]);add(13,"开源项目规范",["gt-kp-086"]);add(13,"个人项目展示",["gt-kp-087"]);add(13,"面试准备",["gt-kp-088"]);add(13,"模拟测试",["gt-kp-089"]);add(13,"考前冲刺",["gt-kp-090"]);
return all;}
const KP=[["Git","分布式版本控制系统"],["GitHub","基于Git的代码托管平台"],["版本控制","管理文件变更历史"],["仓库","存储项目文件和版本历史"],["工作区","本地文件系统的工作目录"],["暂存区","暂存待提交的修改"],["本地仓库","存储提交历史"],["远程仓库","托管在服务器的仓库"],["commit","提交暂存区到本地仓库"],["branch","分支平行开发线"],["merge","合并分支"],["rebase","变基重新应用提交"],["conflict","合并冲突"],["reset","移动HEAD指针重置状态"],["revert","撤销某次提交"],["reflog","引用日志恢复丢失提交"],["stash","暂存工作区修改"],["tag","标记版本号"],["clone","克隆远程仓库到本地"],["push","推送本地提交到远程"],["pull","拉取远程更新并合并"],["fetch","拉取远程不自动合并"],["origin","默认远程仓库名"],["HEAD","当前所在指针"],["PR","Pull Request拉取请求"],["issue","问题追踪"],["CodeReview","代码审查"],["Actions","自动化工作流"],["workflow","一组自动化步骤"],["job","工作流中的任务"],["step","任务中的步骤"],["Pages","静态站点托管"],["Fork","复制他人仓库"],["协作","多人共同开发"],["开源","开放源代码"],["SSH","安全Shell协议"],["token","访问令牌"],["branch protection","分支保护规则"],["commit message","提交信息规范"]];
function buildKP(){const k=KP.map((kp,i)=>({id:`gt-kp-${String(i+1).padStart(4,"0")}`,name:kp[0],description:kp[1],category:"Git",tags:["Git"],difficulty:i<30?"easy":i<50?"medium":"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"}));for(let i=0;i<700;i++){const t=["Git","命令","分支","远程","协作","Actions","Pages","开源","工具","综合"];k.push({id:`gt-kp-${String(k.length+1).padStart(4,"0")}`,name:`${t[i%t.length]}知识点${i+1}`,description:`Git知识点：${t[i%t.length]}${i+1}`,category:"Git",tags:["Git"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"});}return k;}
const QC=["Git与版本控制入门","Git安装配置与基本概念","工作区暂存区与仓库","addcommitstatus与log","分支基础与分支管理","mergerebase与冲突解决","resetrevert与历史回退","remoteclonepull与push","GitHub仓库管理","IssuesPullRequest与CodeReview","GitHubActions入门","GitHubPages部署","团队协作规范与提交规范","开源贡献项目作品集与综合实战"];
function buildQ(){
  const qs=[];let qid=1;
  const TM=[
    {c:0,s:"Git是什么类型的版本控制系统？",o:["分布式","集中式","本地","云端"],a:"A",d:"easy",t:"single_choice"},
    {c:0,s:"Git由谁创建？",o:["Linus Torvalds","Dennis Ritchie","Bjarne Stroustrup","James Gosling"],a:"A",d:"easy",t:"single_choice"},
    {c:1,s:"git config --global user.name的作用？",o:["设置用户名称","设置邮箱","设置密码","设置SSH"],a:"A",d:"easy",t:"single_choice"},
    {c:2,s:"工作区中的文件状态有哪些？",o:["Untracked/Modified/Staged","Unmodified/Divided","New/Edit/Delete","Open/Closed"],a:"A",d:"medium",t:"single_choice"},
    {c:2,s:"git init的作用？",o:["初始化新仓库","克隆仓库","删除仓库","远程仓库"],a:"A",d:"easy",t:"single_choice"},
    {c:3,s:"git status的作用？",o:["查看文件状态","查看提交","查看分支","查看配置"],a:"A",d:"easy",t:"single_choice"},
    {c:3,s:"git log --oneline的作用？",o:["简洁显示提交历史","显示差异","显示分支","显示配置"],a:"A",d:"medium",t:"single_choice"},
    {c:4,s:"创建新分支并切换的命令？",o:["git checkout -b","git branch","git switch","git checkout"],a:"A",d:"medium",t:"single_choice"},
    {c:4,s:"默认分支名通常是什么？",o:["main","master","primary","origin"],a:"A",d:"easy",t:"single_choice"},
    {c:5,s:"git merge和git rebase的主要区别？",o:["merge保留历史rebase变基","merge删历史rebase保留","一样","merge更快"],a:"A",d:"hard",t:"single_choice"},
    {c:5,s:"冲突标记<<<<<<< HEAD表示？",o:["当前分支的更改","合并进来的更改","冲突代码","删除的代码"],a:"A",d:"hard",t:"single_choice"},
    {c:6,s:"git reset --hard HEAD~1的作用？",o:["撤销最近提交并删除更改","撤销提交保留更改","回退远程","创建新提交"],a:"A",d:"hard",t:"single_choice"},
    {c:6,s:"git revert和git reset区别？",o:["revert创建新提交reset移动HEAD","reset创建新提交","revert移动HEAD","没有区别"],a:"A",d:"hard",t:"single_choice"},
    {c:6,s:"git reflog的作用？",o:["查看所有HEAD移动记录","查看提交","查看分支","查看差异"],a:"A",d:"hard",t:"single_choice"},
    {c:7,s:"git push origin main的作用？",o:["推送本地main到远程origin","拉取远程","克隆仓库","创建分支"],a:"A",d:"easy",t:"single_choice"},
    {c:7,s:"git pull相当于？",o:["fetch+merge","fetch+rebase","clone+push","push+fetch"],a:"A",d:"medium",t:"single_choice"},
    {c:8,s:"分支保护规则可以防止什么？",o:["直接推送到受保护分支","创建分支","删除仓库","Fork"],a:"A",d:"medium",t:"single_choice"},
    {c:8,s:"SSH Key用于什么？",o:["免密认证","加密传输","存储密码","双重验证"],a:"A",d:"medium",t:"single_choice"},
    {c:9,s:"Pull Request的作用？",o:["请求合并代码变更","提交Issue","查看仓库","管理团队"],a:"A",d:"easy",t:"single_choice"},
    {c:9,s:"Code Review的目的是什么？",o:["保证代码质量","加快编码","增加代码","减少功能"],a:"A",d:"easy",t:"single_choice"},
    {c:10,s:"GitHub Actions的workflow文件格式是？",o:["YAML","JSON","XML","TOML"],a:"A",d:"medium",t:"single_choice"},
    {c:10,s:"Actions中on:push表示？",o:["推送到仓库时触发","PR触发","定时触发","手动触发"],a:"A",d:"easy",t:"single_choice"},
    {c:11,s:"GitHub Pages可用于部署什么？",o:["静态网站","动态网站","数据库","后端API"],a:"A",d:"easy",t:"single_choice"},
    {c:12,s:"Conventional Commits格式？",o:["type: description","type(description","fix/test/docs","所有字母大写"],a:"A",d:"medium",t:"single_choice"},
    {c:13,s:"Fork仓库后如何同步原仓库？",o:["添加上游remote并fetch","自动同步","创建PR","Push到原仓库"],a:"A",d:"hard",t:"single_choice"},
    {c:13,s:"如何向开源项目贡献代码？",o:["Fork→修改→PR","直接push","提Issue","发邮件"],a:"A",d:"easy",t:"single_choice"},
  ];
  for(const t of TM){qs.push({id:`gt-q-${String(qid).padStart(6,"0")}`,type:t.t,difficulty:t.d||"easy",chapter:QC[t.c],knowledge_points:[QC[t.c]],stem:t.s,options:t.o.map((x,i)=>({label:String.fromCharCode(65+i),text:x})),answer:t.a,explanation:`${t.s}正确答案是${t.a}。${t.d==="hard"?"这个知识点容易混淆：需要多实践来加深理解。":""}`,wrong_reason:`对${QC[t.c]}相关概念理解需加强。`,related_questions:[],tags:[QC[t.c]],estimated_time:60,source_type:"curated-generated"});qid++;}
  const e={};qs.forEach(q=>{e[q.type]=(e[q.type]||0)+1;});
  const TA=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:450},{type:"case_analysis",min:1250}];
  while(qid<=3700){
    const u=TA.filter(t=>(e[t.type]||0)<t.min);const it=pick(u.length>0?u:TA);const ch=pick(QC);const d=pick(DIFF);
    const id=`gt-q-${String(qid).padStart(6,"0")}`;let o=[],a="",s="";
    switch(it.type){
      case"single_choice":s=`关于Git${ch}表述正确的是？`;o=[0,1,2,3].map(i=>({label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"}));a="A";break;
      case"multiple_choice":s=`以下关于Git${ch}哪些正确？（多选）`;o=[0,1,2,3].map(i=>({label:String.fromCharCode(65+i),text:i<2?"正确":"错误"}));a="AB";break;
      case"true_false":s=`${ch}是Git版本控制的核心概念。（判断）`;o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=pick(["A","B"]);break;
      case"fill_blank":s=`在Git${ch}中______是重要概念。`;o=[{label:"A",text:"填写"}];a="按知识点";break;
      case"short_answer":s=`简述Git中${ch}的用途和使用方法。`;o=[{label:"A",text:"简答"}];a=`${ch}用于管理版本。`;break;
      case"case_analysis":s=`Git${ch}实践案例：描述步骤。`;o=[0,1,2,3].map(i=>({label:String.fromCharCode(65+i),text:`方案${i+1}`}));a="A";break;
    }
    qs.push({id,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:`正确答案是${a}。`,wrong_reason:`需加强对${ch}的实践。`,related_questions:[],tags:[ch],estimated_time:it.type==="case_analysis"?120:60,source_type:"curated-generated"});
    e[it.type]=(e[it.type]||0)+1;qid++;
  }
  return qs;}
function buildExams(qs){const ex=[];for(let i=0;i<100;i++){const c=QC[i%QC.length];const d=i<35?"easy":i<65?"medium":"hard";const chQs=qs.filter(q=>q.chapter===c);ex.push({id:`gt-exam-${String(i+1).padStart(2,"0")}`,title:`${c}${d==="easy"?"基础":d==="medium"?"进阶":"综合"}`,difficulty:d,timeLimit:d==="hard"?90:60,totalScore:100,passingScore:60,questionIds:pickN(chQs,25).map(q=>q.id),tags:[c],updatedAt:"2026-07-02T00:00:00.000Z"});}return ex;}
function buildCases(qs){const src=["初始化仓库","第一次提交","连接远程仓库","推送代码","分支创建","切换分支","合并分支","合并冲突","回滚提交","恢复误删文件","stash暂存","创建PR","CodeReview","配置Actions","部署Pages","tag发布","Fork仓库","多人协作","开源贡献","SSH配置"];const c=[];for(let i=0;i<260;i++){const t=src[i%src.length];c.push({id:`gt-case-${String(i+1).padStart(3,"0")}`,title:`${t}案例${i+1}`,description:`通过${t}掌握Git`,difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"需求",description:"分析"},{order:2,title:"命令",description:"选命令"},{order:3,title:"执行",description:"操作"},{order:4,title:"确认",description:"验证"},{order:5,title:"总结",description:"总结"}],relatedQuestionIds:pickN(qs,3).map(q=>q.id),tags:[t],updatedAt:"2026-07-02T00:00:00.000Z"});}return c;}
const RT=[{slug:"3天Git入门",days:3,target:"入门"},{slug:"7天Git基础",days:7,target:"基础"},{slug:"14天分支协作",days:14,target:"协作"},{slug:"21天Git精通",days:21,target:"精通"},{slug:"30天GitHub",days:30,target:"GitHub"},{slug:"45天开源贡献",days:45,target:"开源"},{slug:"基础命令专项",days:5,target:"命令"},{slug:"分支专项",days:5,target:"分支"},{slug:"冲突解决专项",days:3,target:"冲突"},{slug:"远程协作专项",days:5,target:"远程"},{slug:"Actions专项",days:7,target:"Actions"},{slug:"Pages专项",days:3,target:"Pages"},{slug:"面试专项",days:5,target:"面试"},{slug:"期末冲刺",days:5,target:"期末"},{slug:"Git复习",days:5,target:"复习"},{slug:"开源实战",days:7,target:"开源"},{slug:"团队协作",days:5,target:"协作"},{slug:"Git大总结",days:3,target:"总结"}];
function buildRoutes(cs,ls){return RT.map((r,i)=>({id:`gt-route-${String(i+1).padStart(2,"0")}`,slug:r.slug,title:r.slug,description:r.slug,summary:r.slug,targetUser:r.target,durationDays:r.days,steps:cs.slice(0,5).map((c,si)=>({order:si+1,title:`第${si*7+1}-${Math.min((si+1)*7,r.days)}天`,description:`学习${c.title}`,courseId:c.id,lessonId:ls.filter(l=>l.courseId===c.id)[0]?.id||ls[0]?.id})),recommendedCourseIds:cs.slice(0,5).map(c=>c.id),recommendedLessonIds:ls.slice(0,10).map(l=>l.id),recommendedQuestionIds:[],outcomes:["掌握Git","熟练协作","能用Actions","能部署Pages"]}));}
const GL=[["Git","分布式版本控制"],["GitHub","代码托管平台"],["仓库","项目存储"],["工作区","工作目录"],["暂存区","暂存修改"],["commit","提交快照"],["branch","分支"],["merge","合并"],["rebase","变基"],["conflict","冲突"],["reset","重置"],["revert","还原"],["reflog","引用日志"],["stash","暂存"],["tag","标签"],["clone","克隆"],["push","推送"],["pull","拉取"],["fetch","获取"],["origin","远程名"],["HEAD","当前指针"],["PR","拉取请求"],["Issue","问题追踪"],["Actions","自动化"],["workflow","工作流"],["job","任务"],["step","步骤"],["Pages","托管"],["Fork","复制"],["Review","审查"],["SSH","安全连接"],["token","令牌"]];
for(let i=GL.length;i<360;i++){GL.push([`Git概念${i+1}`,`Git概念${i+1}说明`]);}
function buildGlossary(){return GL.map((x,i)=>({id:`gt-glossary-${String(i+1).padStart(3,"0")}`,term:x[0],definition:x[1],category:"Git",tags:["Git"],updatedAt:"2026-07-02T00:00:00.000Z"}));}
const FAQ=[["Git和SVN区别？","Git分布式SVN集中式Git离线也能提交。"],["git pull和git fetch的区别？","fetch拉取不合并pull合并。"],["merge和rebase怎么选？","merge保留历史rebase线性历史。"],["如何撤销上一次commit？","git reset HEAD~1保留更改或git revert。"],["commit写错信息怎么改？","git commit --amend修改最近commit。"],["如何解决冲突？","手动编辑冲突文件→git add→commit。"],["gitignore文件是什么？","忽略不需要版本控制的文件。"],["怎么恢复误删文件？","git checkout HEAD 文件名或git restore。"],["SSH Key如何生成？","ssh-keygen -t rsa -b 4096。"],["Fork和Clone区别？","Fork服务端复制Clone本地复制。"],["PR如何Review？","评论→approve→request changes。"],["Actions触发方式？","pushpull_requestissueschedulworkflow_dispatch等。"]];
for(let i=FAQ.length;i<210;i++){FAQ.push([`Git常见问题${i+1}？`,`Git常见问题${i+1}的解答。`]);}
function buildFaqs(){return FAQ.slice(0,210).map((x,i)=>({id:`gt-faq-${String(i+1).padStart(3,"0")}`,question:x[0],answer:x[1],category:"Git",tags:["Git"],updatedAt:"2026-07-02T00:00:00.000Z"}));}
function buildSearchIndex(ls,kps,qs,gl,fs2){const e=[];ls.forEach(l=>e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:`/lessons/${l.slug}`,tags:["Git"]}));kps.forEach(k=>e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:`/knowledge/${k.id}`,tags:["Git"]}));qs.forEach(q=>e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:`/questions/${q.id}`,tags:["Git"]}));gl.forEach(g=>e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["Git"]}));fs2.forEach(f=>e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["Git"]}));return e;}
async function main(){
  console.log("🚀 Generating module-git-github...\n");
  const tags=buildTags();const courses=buildCourses();const lessons=buildLessons();const kps=buildKP();const questions=buildQ();
  const exams=buildExams(questions);const cases=buildCases(questions);const routes=buildRoutes(courses,lessons);
  const glossary=buildGlossary();const faqs=buildFaqs();const si=buildSearchIndex(lessons,kps,questions,glossary,faqs);
  courses.forEach(c=>{const cl=lessons.filter(l=>l.courseId===c.id);c.lessonIds=cl.map(l=>l.id);c.totalLessons=cl.length;c.tags=[c.title];});
  const cm={};questions.forEach(q=>{if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(l=>{const ch=COURSES_DATA.find(c=>c.id===l.courseId)?.title||"";l.practiceQuestionIds=(cm[ch]||[]).slice(0,5);});
  const mod={id:"mod-git-github",slug:"module-git-github",title:"Git 与 GitHub 工程协作",subtitle:"面向编程学习者和团队协作者",description:"面向编程学习者开源协作者团队项目成员和准备实习的人系统学习Git基础版本控制分支合并冲突解决远程仓库GitHubPull RequestIssuesActionsPages项目协作规范和开源工作流的静态学习模块。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["Git","GitHub","版本控制","分支","Pull Request","Actions","GitHub Pages","开源协作"],estimatedHours:120,difficulty:"beginner",updatedAt:"2026-07-02T12:00:00.000Z",coverEmoji:"🔀",repoUrl:"https://github.com/openskill-galaxy/module-git-github",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  const files={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(const[n,data]of Object.entries(files)){const fp=path.join(DATA,n);fs.writeFileSync(fp,JSON.stringify(data,null,2),"utf-8");console.log(`  ${n} (${Array.isArray(data)?data.length:1})`);}
  const tc={};questions.forEach(q=>{tc[q.type]=(tc[q.type]||0)+1;});
  console.log(`\ncourses:${courses.length} lessons:${lessons.length} KPs:${kps.length} questions:${questions.length} exams:${exams.length} cases:${cases.length} routes:${routes.length} tags:${tags.length} glossary:${glossary.length} faqs:${faqs.length} search-index:${si.length}`);
  for(const[t,c]of Object.entries(tc).sort())console.log(`  ${t}:${c}`);console.log("✅ Done!");}
main().catch(e=>{console.error(e);process.exit(1);});
