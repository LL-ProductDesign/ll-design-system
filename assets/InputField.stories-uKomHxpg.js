import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-BGCoxSFF.js";import{e as pe,c as n}from"./tokens-0bMLUu_4.js";import"./preload-helper-PPVm8Dsz.js";const o={borderPrimary:n["border-primary"],borderBrand:n["border-brand"],borderError:n["border-error"],borderDisabled:n["border-primary"],bgPrimary:n["bg-primary"],bgSecondary:n["bg-secondary"],textPrimary:n["text-primary"],textSecondary:n["text-secondary"],textDisabled:n["text-disabled"],textError:n["text-error"],focusShadow:pe.focus},v={fontFamily:"'Fira Sans', sans-serif",fontSize:14,fontStyle:"normal"};function ue(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":!0,children:[e.jsx("circle",{cx:"8",cy:"8",r:"6.5",stroke:o.textSecondary}),e.jsx("rect",{x:"7.25",y:"6.75",width:"1.5",height:"5",rx:"0.75",fill:o.textSecondary}),e.jsx("rect",{x:"7.25",y:"4.25",width:"1.5",height:"1.5",rx:"0.75",fill:o.textSecondary})]})}function u({label:t,required:a=!1,optional:r=!1,placeholder:s="",value:l,onChange:G,variant:$="default",forceState:m,leftIcon:N,rightIcon:O,hintText:K,disabled:i=!1,type:J="text",id:Q}){const[ee,W]=d.useState("default"),h=i?"disabled":m??ee;let g;h==="disabled"?g=o.borderDisabled:h==="focus"?g=o.borderBrand:$==="error"?g=o.borderError:g=o.borderPrimary;const re=h==="disabled"?o.bgSecondary:o.bgPrimary,te=h==="hover"?`linear-gradient(${n.hover},${n.hover}), linear-gradient(${n["bg-primary"]},${n["bg-primary"]})`:void 0,ae=h==="disabled"?o.textDisabled:o.textPrimary,oe=h==="focus"?o.focusShadow:void 0,se=t&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,marginBottom:4},children:[e.jsx("label",{htmlFor:Q,style:{...v,lineHeight:"18px",color:o.textPrimary,cursor:i?"default":"pointer"},children:t}),a&&e.jsx("span",{style:{...v,color:o.textError,letterSpacing:"0.03em"},children:"*"}),r&&e.jsx("span",{style:{...v,color:o.textSecondary,lineHeight:"18px"},children:"(Optional)"}),e.jsx(ue,{})]}),ne={display:"flex",alignItems:"center",height:40,border:`1px solid ${g}`,borderRadius:8,overflow:"hidden",background:te??re,boxShadow:oe,transition:"border-color 0.15s, box-shadow 0.15s",cursor:i?"not-allowed":"text"},le={flex:"1 0 0",minWidth:0,height:"100%",padding:"0 12px",paddingLeft:N?0:12,paddingRight:O?0:12,border:"none",outline:"none",background:"transparent",...v,lineHeight:"18px",color:ae,cursor:i?"not-allowed":"text"},Y={display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:16,height:16,color:i?o.textDisabled:o.textSecondary},ie=N&&e.jsx("span",{style:{...Y,marginLeft:12,marginRight:4},children:N}),ce=O&&e.jsx("span",{style:{...Y,marginRight:12,marginLeft:4},children:O}),de=K&&e.jsx("p",{style:{...v,lineHeight:"18px",color:$==="error"?o.textError:o.textSecondary,margin:"4px 0 0"},children:K});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%"},children:[se,e.jsxs("div",{style:ne,onMouseEnter:()=>!i&&!m&&W("hover"),onMouseLeave:()=>!i&&!m&&W("default"),children:[ie,e.jsx("input",{id:Q,type:J,value:l,onChange:G,placeholder:s,disabled:i,style:le,onFocus:()=>!i&&!m&&W("focus"),onBlur:()=>!i&&!m&&W("default")}),ce]}),de]})}u.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{label:{required:!1,tsType:{name:"string"},description:"Label text shown above the input"},required:{required:!1,tsType:{name:"boolean"},description:"Marks the field as required (shows red asterisk)",defaultValue:{value:"false",computed:!1}},optional:{required:!1,tsType:{name:"boolean"},description:'Marks the field as optional (shows grey "(Optional)")',defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"''",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Controlled value"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:"Change handler"},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"}]},description:"Visual / validation state",defaultValue:{value:"'default'",computed:!1}},forceState:{required:!1,tsType:{name:"union",raw:"'default' | 'hover' | 'focus' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'disabled'"}]},description:"Force a specific visual state (useful for Storybook; normally driven by interaction)"},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon rendered on the left side of the input"},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon rendered on the right side of the input"},hintText:{required:!1,tsType:{name:"string"},description:"Helper / error message shown below the input"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the input",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"string"},description:"Input type",defaultValue:{value:"'text'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Accessible id (label is linked via htmlFor)"}}};const{expect:c,userEvent:p,within:_}=__STORYBOOK_MODULE_TEST__;function U(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":!0,children:[e.jsx("circle",{cx:"7",cy:"7",r:"4.5",stroke:"currentColor",strokeWidth:"1.3"}),e.jsx("path",{d:"M10.5 10.5L13 13",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})]})}function X(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":!0,children:[e.jsx("rect",{x:"1.5",y:"3.5",width:"13",height:"9",rx:"1.5",stroke:"currentColor",strokeWidth:"1.3"}),e.jsx("path",{d:"M1.5 5.5L8 9.5L14.5 5.5",stroke:"currentColor",strokeWidth:"1.3"})]})}function z(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":!0,children:[e.jsx("path",{d:"M1 8C1 8 3.5 3.5 8 3.5C12.5 3.5 15 8 15 8C15 8 12.5 12.5 8 12.5C3.5 12.5 1 8 1 8Z",stroke:"currentColor",strokeWidth:"1.3"}),e.jsx("circle",{cx:"8",cy:"8",r:"2",stroke:"currentColor",strokeWidth:"1.3"})]})}function he(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":!0,children:[e.jsx("rect",{x:"3.5",y:"7",width:"9",height:"6.5",rx:"1.5",stroke:"currentColor",strokeWidth:"1.3"}),e.jsx("path",{d:"M5.5 7V5C5.5 3.619 6.619 2.5 8 2.5V2.5C9.381 2.5 10.5 3.619 10.5 5V7",stroke:"currentColor",strokeWidth:"1.3"})]})}const ye={title:"Components/Input Field",component:u,parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{width:370,padding:24,fontFamily:"'Fira Sans', sans-serif"},children:e.jsx(t,{})})],argTypes:{variant:{control:"select",options:["default","error"],description:"Visual / validation state of the field"},forceState:{control:"select",options:[void 0,"default","hover","focus","disabled"],description:"Override the interaction state (useful for visual testing)"},label:{control:"text"},placeholder:{control:"text"},hintText:{control:"text"},required:{control:"boolean"},optional:{control:"boolean"},disabled:{control:"boolean"},type:{control:"select",options:["text","email","password","number","search","tel","url"]}}};function Z(t){const[a,r]=d.useState(t.value??"");return e.jsx(u,{...t,value:a,onChange:s=>r(s.target.value)})}const b={args:{label:"Level",required:!0,placeholder:"All levels",id:"input-default"}},y={args:{label:"Level",required:!0,placeholder:"All levels",forceState:"hover",id:"input-hover"}},f={args:{label:"Level",required:!0,placeholder:"All levels",forceState:"focus",id:"input-focus"}},x={args:{label:"Level",placeholder:"All levels",disabled:!0,id:"input-disabled"}},w={name:"State / Placeholder",args:{label:"Level",placeholder:"Search levels…",id:"input-placeholder"}},S={args:{label:"Level",required:!0,value:"Bad input",variant:"error",hintText:"This is an error message.",id:"input-error"}},T={name:"Error / Hover",args:{label:"Level",required:!0,value:"Bad input",variant:"error",hintText:"This is an error message.",forceState:"hover",id:"input-error-hover"}},I={name:"Error / Focus",args:{label:"Level",required:!0,value:"Bad input",variant:"error",hintText:"This is an error message.",forceState:"focus",id:"input-error-focus"}},E={name:"Label / Required",args:{label:"Email",required:!0,placeholder:"you@example.com",id:"input-required"}},L={name:"Label / Optional",args:{label:"Phone number",optional:!0,placeholder:"+1 555 0100",id:"input-optional"}},j={name:"Label / No Label",args:{placeholder:"Search…",id:"input-nolabel"}},B={name:"Icons / Left Icon",args:{label:"Search",placeholder:"Search…",leftIcon:e.jsx(U,{}),id:"input-left-icon"}},k={name:"Icons / Right Icon",args:{label:"Password",placeholder:"Enter password",type:"password",rightIcon:e.jsx(z,{}),id:"input-right-icon"}},C={name:"Icons / Both Icons",args:{label:"Email",placeholder:"you@example.com",leftIcon:e.jsx(X,{}),rightIcon:e.jsx(U,{}),id:"input-both-icons"}},q={name:"Types / Password",render:()=>{const[t,a]=d.useState(""),[r,s]=d.useState(!1);return e.jsx(u,{label:"Password",required:!0,type:r?"text":"password",placeholder:"Min. 8 characters",value:t,onChange:l=>a(l.target.value),rightIcon:e.jsx("button",{type:"button",onClick:()=>s(l=>!l),style:{background:"none",border:"none",cursor:"pointer",padding:0,display:"flex",color:"inherit"},"aria-label":r?"Hide password":"Show password",children:e.jsx(z,{})}),id:"input-password"})}},F={name:"Types / Email",args:{label:"Email address",type:"email",placeholder:"you@example.com",leftIcon:e.jsx(X,{}),id:"input-email"}},R={name:"Types / Number",args:{label:"Quantity",type:"number",placeholder:"0",id:"input-number"}},A={name:"Interactive / Live Validation",render:()=>{const[t,a]=d.useState(""),r=t.length>0&&t.length<3;return e.jsx(u,{label:"Username",required:!0,placeholder:"At least 3 characters",value:t,onChange:s=>a(s.target.value),variant:r?"error":"default",hintText:r?"Username must be at least 3 characters.":void 0,id:"input-live-validation"})}},P={name:"Interactive / Character Counter",render:()=>{const[a,r]=d.useState(""),s=a.length>50;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[e.jsx(u,{label:"Bio",optional:!0,placeholder:"Tell us about yourself…",value:a,onChange:l=>r(l.target.value),variant:s?"error":"default",id:"input-char-counter"}),e.jsxs("div",{style:{textAlign:"right",fontSize:12,marginTop:4,color:s?"#ca2b34":"#5d7682",fontFamily:"'Fira Sans', sans-serif"},children:[a.length," / ",50]})]})}},V={name:"All States",render:()=>{const t=[{label:"Default",props:{placeholder:"All levels"}},{label:"Hover",props:{placeholder:"All levels",forceState:"hover"}},{label:"Focus",props:{placeholder:"All levels",forceState:"focus"}},{label:"Disabled",props:{placeholder:"All levels",disabled:!0}},{label:"Error – default",props:{value:"Bad input",variant:"error",hintText:"This is an error message."}},{label:"Error – hover",props:{value:"Bad input",variant:"error",hintText:"This is an error message.",forceState:"hover"}},{label:"Error – focus",props:{value:"Bad input",variant:"error",hintText:"This is an error message.",forceState:"focus"}},{label:"With left icon",props:{placeholder:"Search…",leftIcon:e.jsx(U,{})}},{label:"With right icon",props:{placeholder:"Email",rightIcon:e.jsx(X,{})}}];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24,width:370,fontFamily:"'Fira Sans', sans-serif"},children:t.map(({label:a,props:r})=>e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 6px",fontSize:11,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.06em"},children:a}),e.jsx(Z,{label:"Level",required:!0,...r})]},a))})}},D={name:"Tests / Keyboard Interaction",render:()=>e.jsx(Z,{label:"Username",required:!0,placeholder:"Type here…",id:"input-test"}),play:async({canvasElement:t})=>{const r=_(t).getByRole("textbox");await p.tab(),c(r).toHaveFocus(),await p.type(r,"learnlight"),c(r.value).toBe("learnlight"),await p.clear(r),c(r.value).toBe(""),await p.tab(),c(r).not.toHaveFocus()}},M={name:"Tests / Disabled Input",args:{label:"Level",placeholder:"All levels",disabled:!0,id:"input-disabled-test"},play:async({canvasElement:t})=>{const r=_(t).getByRole("textbox");c(r).toBeDisabled(),await p.type(r,"hello"),c(r.value).toBe("")}},H={name:"Tests / Password Toggle",render:()=>{const[t,a]=d.useState("secret123"),[r,s]=d.useState(!1);return e.jsx(u,{label:"Password",type:r?"text":"password",value:t,onChange:l=>a(l.target.value),rightIcon:e.jsx("button",{type:"button",onClick:()=>s(l=>!l),style:{background:"none",border:"none",cursor:"pointer",padding:0,display:"flex",color:"inherit"},"aria-label":"Toggle visibility",children:r?e.jsx(z,{}):e.jsx(he,{})}),id:"input-pw-toggle"})},play:async({canvasElement:t})=>{const a=_(t),r=a.getByLabelText("Password");c(r.type).toBe("password");const s=a.getByRole("button",{name:"Toggle visibility"});await p.click(s),c(r.type).toBe("text"),await p.click(s),c(r.type).toBe("password")}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Level',
    required: true,
    placeholder: 'All levels',
    id: 'input-default'
  }
}`,...b.parameters?.docs?.source},description:{story:"Resting state — no interaction",...b.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Level',
    required: true,
    placeholder: 'All levels',
    forceState: 'hover',
    id: 'input-hover'
  }
}`,...y.parameters?.docs?.source},description:{story:"Hover — subtle background darkening",...y.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Level',
    required: true,
    placeholder: 'All levels',
    forceState: 'focus',
    id: 'input-focus'
  }
}`,...f.parameters?.docs?.source},description:{story:"Focus — brand-blue border + glow ring",...f.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Level',
    placeholder: 'All levels',
    disabled: true,
    id: 'input-disabled'
  }
}`,...x.parameters?.docs?.source},description:{story:"Disabled — no interaction, greyed-out",...x.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'State / Placeholder',
  args: {
    label: 'Level',
    placeholder: 'Search levels…',
    id: 'input-placeholder'
  }
}`,...w.parameters?.docs?.source},description:{story:"Placeholder text visible before the user types",...w.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Level',
    required: true,
    value: 'Bad input',
    variant: 'error',
    hintText: 'This is an error message.',
    id: 'input-error'
  }
}`,...S.parameters?.docs?.source},description:{story:"Error — red border, error hint message",...S.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Error / Hover',
  args: {
    label: 'Level',
    required: true,
    value: 'Bad input',
    variant: 'error',
    hintText: 'This is an error message.',
    forceState: 'hover',
    id: 'input-error-hover'
  }
}`,...T.parameters?.docs?.source},description:{story:"Error in hover state",...T.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Error / Focus',
  args: {
    label: 'Level',
    required: true,
    value: 'Bad input',
    variant: 'error',
    hintText: 'This is an error message.',
    forceState: 'focus',
    id: 'input-error-focus'
  }
}`,...I.parameters?.docs?.source},description:{story:"Error in focus state",...I.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Label / Required',
  args: {
    label: 'Email',
    required: true,
    placeholder: 'you@example.com',
    id: 'input-required'
  }
}`,...E.parameters?.docs?.source},description:{story:"Required marker",...E.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Label / Optional',
  args: {
    label: 'Phone number',
    optional: true,
    placeholder: '+1 555 0100',
    id: 'input-optional'
  }
}`,...L.parameters?.docs?.source},description:{story:"Optional marker",...L.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Label / No Label',
  args: {
    placeholder: 'Search…',
    id: 'input-nolabel'
  }
}`,...j.parameters?.docs?.source},description:{story:"No label — standalone input",...j.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Icons / Left Icon',
  args: {
    label: 'Search',
    placeholder: 'Search…',
    leftIcon: <SearchIcon />,
    id: 'input-left-icon'
  }
}`,...B.parameters?.docs?.source},description:{story:"Left icon — search",...B.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Icons / Right Icon',
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    rightIcon: <EyeIcon />,
    id: 'input-right-icon'
  }
}`,...k.parameters?.docs?.source},description:{story:"Right icon — eye (e.g. show/hide password)",...k.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Icons / Both Icons',
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    leftIcon: <MailIcon />,
    rightIcon: <SearchIcon />,
    id: 'input-both-icons'
  }
}`,...C.parameters?.docs?.source},description:{story:"Both icons",...C.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Types / Password',
  render: () => {
    const [value, setValue] = useState('');
    const [show, setShow] = useState(false);
    return <InputField label="Password" required type={show ? 'text' : 'password'} placeholder="Min. 8 characters" value={value} onChange={e => setValue(e.target.value)} rightIcon={<button type="button" onClick={() => setShow(s => !s)} style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      color: 'inherit'
    }} aria-label={show ? 'Hide password' : 'Show password'}>
            <EyeIcon />
          </button>} id="input-password" />;
  }
}`,...q.parameters?.docs?.source},description:{story:"Password type — masked by default",...q.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Types / Email',
  args: {
    label: 'Email address',
    type: 'email',
    placeholder: 'you@example.com',
    leftIcon: <MailIcon />,
    id: 'input-email'
  }
}`,...F.parameters?.docs?.source},description:{story:"Email type",...F.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Types / Number',
  args: {
    label: 'Quantity',
    type: 'number',
    placeholder: '0',
    id: 'input-number'
  }
}`,...R.parameters?.docs?.source},description:{story:"Number type",...R.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Interactive / Live Validation',
  render: () => {
    const [value, setValue] = useState('');
    const isError = value.length > 0 && value.length < 3;
    return <InputField label="Username" required placeholder="At least 3 characters" value={value} onChange={e => setValue(e.target.value)} variant={isError ? 'error' : 'default'} hintText={isError ? 'Username must be at least 3 characters.' : undefined} id="input-live-validation" />;
  }
}`,...A.parameters?.docs?.source},description:{story:"Fully interactive — type to see live validation",...A.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Interactive / Character Counter',
  render: () => {
    const MAX = 50;
    const [value, setValue] = useState('');
    const over = value.length > MAX;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }}>
        <InputField label="Bio" optional placeholder="Tell us about yourself…" value={value} onChange={e => setValue(e.target.value)} variant={over ? 'error' : 'default'} id="input-char-counter" />
        <div style={{
        textAlign: 'right',
        fontSize: 12,
        marginTop: 4,
        color: over ? '#ca2b34' : '#5d7682',
        fontFamily: "'Fira Sans', sans-serif"
      }}>
          {value.length} / {MAX}
        </div>
      </div>;
  }
}`,...P.parameters?.docs?.source},description:{story:"Character counter",...P.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'All States',
  render: () => {
    const rows: Array<{
      label: string;
      props: Partial<React.ComponentProps<typeof InputField>>;
    }> = [{
      label: 'Default',
      props: {
        placeholder: 'All levels'
      }
    }, {
      label: 'Hover',
      props: {
        placeholder: 'All levels',
        forceState: 'hover'
      }
    }, {
      label: 'Focus',
      props: {
        placeholder: 'All levels',
        forceState: 'focus'
      }
    }, {
      label: 'Disabled',
      props: {
        placeholder: 'All levels',
        disabled: true
      }
    }, {
      label: 'Error – default',
      props: {
        value: 'Bad input',
        variant: 'error',
        hintText: 'This is an error message.'
      }
    }, {
      label: 'Error – hover',
      props: {
        value: 'Bad input',
        variant: 'error',
        hintText: 'This is an error message.',
        forceState: 'hover'
      }
    }, {
      label: 'Error – focus',
      props: {
        value: 'Bad input',
        variant: 'error',
        hintText: 'This is an error message.',
        forceState: 'focus'
      }
    }, {
      label: 'With left icon',
      props: {
        placeholder: 'Search…',
        leftIcon: <SearchIcon />
      }
    }, {
      label: 'With right icon',
      props: {
        placeholder: 'Email',
        rightIcon: <MailIcon />
      }
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      width: 370,
      fontFamily: "'Fira Sans', sans-serif"
    }}>
        {rows.map(({
        label,
        props
      }) => <div key={label}>
            <p style={{
          margin: '0 0 6px',
          fontSize: 11,
          color: '#9ca3af',
          textTransform: 'uppercase',
          letterSpacing: '0.06em'
        }}>
              {label}
            </p>
            <Controlled label="Level" required {...props} />
          </div>)}
      </div>;
  }
}`,...V.parameters?.docs?.source},description:{story:"Every state and variant at a glance",...V.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Tests / Keyboard Interaction',
  render: () => <Controlled label="Username" required placeholder="Type here…" id="input-test" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole<HTMLInputElement>('textbox');

    // Tab into the field
    await userEvent.tab();
    expect(input).toHaveFocus();

    // Type a value
    await userEvent.type(input, 'learnlight');
    expect(input.value).toBe('learnlight');

    // Clear with keyboard shortcut
    await userEvent.clear(input);
    expect(input.value).toBe('');

    // Tab away — focus lost
    await userEvent.tab();
    expect(input).not.toHaveFocus();
  }
}`,...D.parameters?.docs?.source},description:{story:"Verifies keyboard navigation and value entry",...D.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Tests / Disabled Input',
  args: {
    label: 'Level',
    placeholder: 'All levels',
    disabled: true,
    id: 'input-disabled-test'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole<HTMLInputElement>('textbox');
    expect(input).toBeDisabled();
    // Confirm typing does nothing
    await userEvent.type(input, 'hello');
    expect(input.value).toBe('');
  }
}`,...M.parameters?.docs?.source},description:{story:"Verifies disabled input cannot receive focus or input",...M.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Tests / Password Toggle',
  render: () => {
    const [value, setValue] = useState('secret123');
    const [show, setShow] = useState(false);
    return <InputField label="Password" type={show ? 'text' : 'password'} value={value} onChange={e => setValue(e.target.value)} rightIcon={<button type="button" onClick={() => setShow(s => !s)} style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      color: 'inherit'
    }} aria-label="Toggle visibility">
            {show ? <EyeIcon /> : <LockIcon />}
          </button>} id="input-pw-toggle" />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText<HTMLInputElement>('Password');

    // Starts masked
    expect(input.type).toBe('password');

    // Click toggle → revealed
    const toggleBtn = canvas.getByRole('button', {
      name: 'Toggle visibility'
    });
    await userEvent.click(toggleBtn);
    expect(input.type).toBe('text');

    // Click again → masked
    await userEvent.click(toggleBtn);
    expect(input.type).toBe('password');
  }
}`,...H.parameters?.docs?.source},description:{story:"Verifies lock-icon password toggle works",...H.parameters?.docs?.description}}};const fe=["Default","Hover","Focus","Disabled","PlaceholderText","Error","ErrorHover","ErrorFocus","Required","Optional","NoLabel","WithLeftIcon","WithRightIcon","WithBothIcons","PasswordType","EmailType","NumberType","LiveValidation","CharacterCounter","AllStates","InteractionTest","DisabledInteractionTest","PasswordToggleTest"];export{V as AllStates,P as CharacterCounter,b as Default,x as Disabled,M as DisabledInteractionTest,F as EmailType,S as Error,I as ErrorFocus,T as ErrorHover,f as Focus,y as Hover,D as InteractionTest,A as LiveValidation,j as NoLabel,R as NumberType,L as Optional,H as PasswordToggleTest,q as PasswordType,w as PlaceholderText,E as Required,C as WithBothIcons,B as WithLeftIcon,k as WithRightIcon,fe as __namedExportsOrder,ye as default};
