import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as h}from"./iframe-BNWTn59m.js";import{c as r,d as I}from"./tokens-D4qHVeFC.js";import"./preload-helper-PPVm8Dsz.js";const C={xs:{box:24,font:10,icon:12,indicator:7,indicatorOffset:0},s:{box:32,font:12,icon:14,indicator:8,indicatorOffset:1},m:{box:40,font:14,icon:16,indicator:10,indicatorOffset:1},l:{box:48,font:16,icon:20,indicator:12,indicatorOffset:2},xl:{box:64,font:20,icon:24,indicator:14,indicatorOffset:2}},T={online:"var(--background-green)",away:"var(--yellow-500)",busy:"var(--text-error)",offline:"var(--text-disabled)",none:"transparent"},D=n=>e.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:[e.jsx("circle",{cx:"12",cy:"8",r:"4"}),e.jsx("path",{d:"M4 20c0-4 3.6-7 8-7s8 3 8 7"})]});function f({src:n,alt:s="",initials:t,size:o="m",status:i="none",icon:k}){const[S,w]=h.useState(!1),a=C[o],v=n&&!S,b=!v&&t,z=!v&&!b,j=b?"var(--background-brand)":"var(--background-secondary)",A=b?"var(--text-invert)":"var(--text-secondary)";return e.jsxs("span",{style:{position:"relative",display:"inline-flex",flexShrink:0,width:a.box,height:a.box},children:[e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a.box,height:a.box,borderRadius:"var(--border-radius-circle)",background:v?"transparent":j,color:A,fontFamily:"var(--font-family-base)",fontSize:a.font,fontWeight:600,overflow:"hidden",userSelect:"none",flexShrink:0},children:[v&&e.jsx("img",{src:n,alt:s,onError:()=>w(!0),style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),b&&e.jsx("span",{style:{lineHeight:1},children:t.slice(0,2).toUpperCase()}),z&&(k??D(a.icon))]}),i!=="none"&&e.jsx("span",{style:{position:"absolute",bottom:a.indicatorOffset,right:a.indicatorOffset,width:a.indicator,height:a.indicator,borderRadius:"50%",background:T[i],border:"2px solid var(--background-primary)",boxSizing:"border-box"}})]})}f.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:"Image URL. When provided, the image is displayed."},alt:{required:!1,tsType:{name:"string"},description:"Alt text for the image.",defaultValue:{value:"''",computed:!1}},initials:{required:!1,tsType:{name:"string"},description:"Initials (1–2 characters) shown when no image is provided."},size:{required:!1,tsType:{name:"union",raw:"'xs' | 's' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}]},description:`Size of the avatar.
@default 'm'`,defaultValue:{value:"'m'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'online' | 'away' | 'busy' | 'offline' | 'none'",elements:[{name:"literal",value:"'online'"},{name:"literal",value:"'away'"},{name:"literal",value:"'busy'"},{name:"literal",value:"'offline'"},{name:"literal",value:"'none'"}]},description:`Status indicator shown as a small dot in the bottom-right corner.
@default 'none'`,defaultValue:{value:"'none'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon node shown as fallback when no image or initials are provided."}}};const O={title:"Components/Avatar",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","s","m","l","xl"],description:"Avatar size — xs=24px, s=32px, m=40px, l=48px, xl=64px"},status:{control:"select",options:["none","online","away","busy","offline"],description:"Status indicator"},src:{control:"text",description:"Image URL"},initials:{control:"text",description:"1–2 character initials"},alt:{control:"text"}},args:{size:"m",status:"none"}},l={args:{initials:"JD"}},c={args:{src:"https://i.pravatar.cc/128?img=47",alt:"Jane Doe"}},d={args:{initials:"AB"}},p={args:{}},m={args:{src:"https://broken.url/image.png",alt:"Broken"}},u={name:"Size / All Sizes",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:16},children:["xs","s","m","l","xl"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(f,{size:n,initials:"JD"}),e.jsx("span",{style:{fontSize:10,color:"var(--neutral-80)",fontFamily:"var(--font-family-base)"},children:n.toUpperCase()})]},n))}),args:{}},g={name:"Status / All Statuses",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:24},children:["none","online","away","busy","offline"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(f,{size:"m",initials:"JD",status:n}),e.jsx("span",{style:{fontSize:10,color:"var(--neutral-80)",fontFamily:"var(--font-family-base)",textTransform:"capitalize"},children:n})]},n))}),args:{}},y={name:"All Variants",render:()=>{const n=["xs","s","m","l","xl"],s=[{label:"Image",props:{src:"https://i.pravatar.cc/128?img=12",alt:"User"}},{label:"Initials",props:{initials:"AB"}},{label:"Fallback",props:{}},{label:"Online",props:{initials:"CD",status:"online"}},{label:"Away",props:{initials:"CD",status:"away"}},{label:"Busy",props:{initials:"CD",status:"busy"}},{label:"Offline",props:{initials:"CD",status:"offline"}}];return e.jsx("div",{style:{fontFamily:"var(--font-family-base)",overflowX:"auto"},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`120px repeat(${n.length}, 64px)`,gap:"16px 8px",alignItems:"center"},children:[e.jsx("div",{}),n.map(t=>e.jsx("div",{style:{fontSize:11,color:"var(--neutral-80)",textAlign:"center"},children:t.toUpperCase()},t)),s.map(({label:t,props:o})=>e.jsxs(h.Fragment,{children:[e.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)"},children:t}),n.map(i=>e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(f,{size:i,...o})},i))]},t))]})})},args:{}},x={name:"Token Usage",render:()=>{const n=[{slot:"Background — initials",token:"bg-brand",value:r["bg-brand"]},{slot:"Background — icon/empty",token:"bg-secondary",value:r["bg-secondary"]},{slot:"Text — initials",token:"text-invert",value:r["text-invert"]},{slot:"Text — icon/empty",token:"text-secondary",value:r["text-secondary"]},{slot:"Status — online",token:"bg-green",value:r["bg-green"]},{slot:"Status — away",token:"yellow-500",value:I.yellow[500]},{slot:"Status — busy",token:"text-error",value:r["text-error"]},{slot:"Status — offline",token:"text-disabled",value:r["text-disabled"]},{slot:"Status ring border",token:"bg-primary",value:r["bg-primary"]}];return e.jsxs("div",{style:{fontFamily:"var(--font-family-base)",maxWidth:500,padding:"8px 0"},children:[e.jsx("p",{style:{margin:"0 0 20px",fontSize:12,color:"var(--text-secondary)"},children:"Colour tokens used by this component."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"220px 160px 40px",gap:"6px 16px",alignItems:"center"},children:[["Slot","Token",""].map(s=>e.jsx("div",{style:{fontSize:10,fontWeight:700,color:"var(--neutral-80)",textTransform:"uppercase",letterSpacing:"0.06em",paddingBottom:4,borderBottom:"1px solid var(--border-color-primary)"},children:s},s)),n.map(({slot:s,token:t,value:o})=>e.jsxs(h.Fragment,{children:[e.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)"},children:s}),e.jsx("div",{style:{fontSize:11,fontFamily:"monospace",color:"var(--text-primary)",background:"var(--background-secondary)",padding:"2px 6px",borderRadius:4},children:t}),e.jsx("div",{title:o,style:{width:28,height:18,borderRadius:4,background:o,border:"1px solid rgba(0,0,0,0.1)"}})]},s))]})]})},args:{}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    initials: 'JD'
  }
}`,...l.parameters?.docs?.source},description:{story:"Interactive playground — use controls to change size, status, and content",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/128?img=47',
    alt: 'Jane Doe'
  }
}`,...c.parameters?.docs?.source},description:{story:"Avatar with a photo",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    initials: 'AB'
  }
}`,...d.parameters?.docs?.source},description:{story:"Avatar with initials — shown when no image is provided",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...p.parameters?.docs?.source},description:{story:"Default icon fallback — shown when no image or initials are provided",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://broken.url/image.png',
    alt: 'Broken'
  }
}`,...m.parameters?.docs?.source},description:{story:"Broken image URL falls back gracefully to the icon",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Size / All Sizes',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 16
  }}>
      {(['xs', 's', 'm', 'l', 'xl'] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
          <Avatar size={size} initials="JD" />
          <span style={{
        fontSize: 10,
        color: 'var(--neutral-80)',
        fontFamily: 'var(--font-family-base)'
      }}>
            {size.toUpperCase()}
          </span>
        </div>)}
    </div>,
  args: {}
}`,...u.parameters?.docs?.source},description:{story:"All five sizes side by side",...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Status / All Statuses',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 24
  }}>
      {(['none', 'online', 'away', 'busy', 'offline'] as const).map(status => <div key={status} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
          <Avatar size="m" initials="JD" status={status} />
          <span style={{
        fontSize: 10,
        color: 'var(--neutral-80)',
        fontFamily: 'var(--font-family-base)',
        textTransform: 'capitalize'
      }}>
            {status}
          </span>
        </div>)}
    </div>,
  args: {}
}`,...g.parameters?.docs?.source},description:{story:"All status indicators",...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => {
    const sizes = ['xs', 's', 'm', 'l', 'xl'] as const;
    const rows: Array<{
      label: string;
      props: Partial<React.ComponentProps<typeof Avatar>>;
    }> = [{
      label: 'Image',
      props: {
        src: 'https://i.pravatar.cc/128?img=12',
        alt: 'User'
      }
    }, {
      label: 'Initials',
      props: {
        initials: 'AB'
      }
    }, {
      label: 'Fallback',
      props: {}
    }, {
      label: 'Online',
      props: {
        initials: 'CD',
        status: 'online'
      }
    }, {
      label: 'Away',
      props: {
        initials: 'CD',
        status: 'away'
      }
    }, {
      label: 'Busy',
      props: {
        initials: 'CD',
        status: 'busy'
      }
    }, {
      label: 'Offline',
      props: {
        initials: 'CD',
        status: 'offline'
      }
    }];
    return <div style={{
      fontFamily: 'var(--font-family-base)',
      overflowX: 'auto'
    }}>
        <div style={{
        display: 'grid',
        gridTemplateColumns: \`120px repeat(\${sizes.length}, 64px)\`,
        gap: '16px 8px',
        alignItems: 'center'
      }}>
          {/* Header row */}
          <div />
          {sizes.map(s => <div key={s} style={{
          fontSize: 11,
          color: 'var(--neutral-80)',
          textAlign: 'center'
        }}>
              {s.toUpperCase()}
            </div>)}

          {/* Data rows */}
          {rows.map(({
          label,
          props
        }) => <React.Fragment key={label}>
              <div style={{
            fontSize: 12,
            color: 'var(--text-secondary)'
          }}>{label}</div>
              {sizes.map(size => <div key={size} style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
                  <Avatar size={size} {...props} />
                </div>)}
            </React.Fragment>)}
        </div>
      </div>;
  },
  args: {}
}`,...y.parameters?.docs?.source},description:{story:"Every combination of content type × size",...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Token Usage',
  render: () => {
    const slots: Array<{
      slot: string;
      token: string;
      value: string;
    }> = [{
      slot: 'Background — initials',
      token: 'bg-brand',
      value: color['bg-brand']
    }, {
      slot: 'Background — icon/empty',
      token: 'bg-secondary',
      value: color['bg-secondary']
    }, {
      slot: 'Text — initials',
      token: 'text-invert',
      value: color['text-invert']
    }, {
      slot: 'Text — icon/empty',
      token: 'text-secondary',
      value: color['text-secondary']
    }, {
      slot: 'Status — online',
      token: 'bg-green',
      value: color['bg-green']
    }, {
      slot: 'Status — away',
      token: 'yellow-500',
      value: scale.yellow[500]
    }, {
      slot: 'Status — busy',
      token: 'text-error',
      value: color['text-error']
    }, {
      slot: 'Status — offline',
      token: 'text-disabled',
      value: color['text-disabled']
    }, {
      slot: 'Status ring border',
      token: 'bg-primary',
      value: color['bg-primary']
    }];
    return <div style={{
      fontFamily: 'var(--font-family-base)',
      maxWidth: 500,
      padding: '8px 0'
    }}>
        <p style={{
        margin: '0 0 20px',
        fontSize: 12,
        color: 'var(--text-secondary)'
      }}>
          Colour tokens used by this component.
        </p>
        <div style={{
        display: 'grid',
        gridTemplateColumns: '220px 160px 40px',
        gap: '6px 16px',
        alignItems: 'center'
      }}>
          {['Slot', 'Token', ''].map(h => <div key={h} style={{
          fontSize: 10,
          fontWeight: 700,
          color: 'var(--neutral-80)',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          paddingBottom: 4,
          borderBottom: '1px solid var(--border-color-primary)'
        }}>{h}</div>)}
          {slots.map(({
          slot,
          token,
          value
        }) => <React.Fragment key={slot}>
              <div style={{
            fontSize: 12,
            color: 'var(--text-secondary)'
          }}>{slot}</div>
              <div style={{
            fontSize: 11,
            fontFamily: 'monospace',
            color: 'var(--text-primary)',
            background: 'var(--background-secondary)',
            padding: '2px 6px',
            borderRadius: 4
          }}>{token}</div>
              <div title={value} style={{
            width: 28,
            height: 18,
            borderRadius: 4,
            background: value,
            border: '1px solid rgba(0,0,0,0.1)'
          }} />
            </React.Fragment>)}
        </div>
      </div>;
  },
  args: {}
}`,...x.parameters?.docs?.source},description:{story:"Colour tokens consumed by the Avatar component",...x.parameters?.docs?.description}}};const W=["Default","WithImage","WithInitials","WithFallback","BrokenImage","AllSizes","AllStatuses","AllVariants","TokenUsage"];export{u as AllSizes,g as AllStatuses,y as AllVariants,m as BrokenImage,l as Default,x as TokenUsage,p as WithFallback,c as WithImage,d as WithInitials,W as __namedExportsOrder,O as default};
