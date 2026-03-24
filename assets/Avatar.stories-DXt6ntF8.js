import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as v}from"./iframe-BGCoxSFF.js";import{c as t,h as j,i as C}from"./tokens-0bMLUu_4.js";import"./preload-helper-PPVm8Dsz.js";const D={xs:{box:24,font:10,icon:12,indicator:7,indicatorOffset:0},s:{box:32,font:12,icon:14,indicator:8,indicatorOffset:1},m:{box:40,font:14,icon:16,indicator:10,indicatorOffset:1},l:{box:48,font:16,icon:20,indicator:12,indicatorOffset:2},xl:{box:64,font:20,icon:24,indicator:14,indicatorOffset:2}},k={online:t["bg-green"],away:C.yellow[500],busy:t["text-error"],offline:t["text-disabled"],none:"transparent"},F=s=>e.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:[e.jsx("circle",{cx:"12",cy:"8",r:"4"}),e.jsx("path",{d:"M4 20c0-4 3.6-7 8-7s8 3 8 7"})]});function u({src:s,alt:x="",initials:n,size:h="m",status:i="none",icon:b}){const[S,w]=v.useState(!1),a=D[h],g=s&&!S,y=!g&&n,z=!g&&!y,A=y?t["bg-brand"]:t["bg-secondary"],I=y?t["text-invert"]:t["text-secondary"];return e.jsxs("span",{style:{position:"relative",display:"inline-flex",flexShrink:0,width:a.box,height:a.box},children:[e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:a.box,height:a.box,borderRadius:j.circle,background:g?"transparent":A,color:I,fontFamily:"'Fira Sans', sans-serif",fontSize:a.font,fontWeight:600,overflow:"hidden",userSelect:"none",flexShrink:0},children:[g&&e.jsx("img",{src:s,alt:x,onError:()=>w(!0),style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),y&&e.jsx("span",{style:{lineHeight:1},children:n.slice(0,2).toUpperCase()}),z&&(b??F(a.icon))]}),i!=="none"&&e.jsx("span",{style:{position:"absolute",bottom:a.indicatorOffset,right:a.indicatorOffset,width:a.indicator,height:a.indicator,borderRadius:"50%",background:k[i],border:`2px solid ${t["bg-primary"]}`,boxSizing:"border-box"}})]})}u.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:"Image URL. When provided, the image is displayed."},alt:{required:!1,tsType:{name:"string"},description:"Alt text for the image.",defaultValue:{value:"''",computed:!1}},initials:{required:!1,tsType:{name:"string"},description:"Initials (1–2 characters) shown when no image is provided."},size:{required:!1,tsType:{name:"union",raw:"'xs' | 's' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}]},description:`Size of the avatar.
@default 'm'`,defaultValue:{value:"'m'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'online' | 'away' | 'busy' | 'offline' | 'none'",elements:[{name:"literal",value:"'online'"},{name:"literal",value:"'away'"},{name:"literal",value:"'busy'"},{name:"literal",value:"'offline'"},{name:"literal",value:"'none'"}]},description:`Status indicator shown as a small dot in the bottom-right corner.
@default 'none'`,defaultValue:{value:"'none'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon node shown as fallback when no image or initials are provided."}}};const U={title:"Components/Avatar",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","s","m","l","xl"],description:"Avatar size — xs=24px, s=32px, m=40px, l=48px, xl=64px"},status:{control:"select",options:["none","online","away","busy","offline"],description:"Status indicator"},src:{control:"text",description:"Image URL"},initials:{control:"text",description:"1–2 character initials"},alt:{control:"text"}},args:{size:"m",status:"none"}},r={args:{initials:"JD"}},o={args:{src:"https://i.pravatar.cc/128?img=47",alt:"Jane Doe"}},l={args:{initials:"AB"}},c={args:{}},p={args:{src:"https://broken.url/image.png",alt:"Broken"}},d={name:"Size / All Sizes",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:16},children:["xs","s","m","l","xl"].map(s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(u,{size:s,initials:"JD"}),e.jsx("span",{style:{fontSize:10,color:"#9ca3af",fontFamily:"sans-serif"},children:s.toUpperCase()})]},s))}),args:{}},m={name:"Status / All Statuses",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:24},children:["none","online","away","busy","offline"].map(s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(u,{size:"m",initials:"JD",status:s}),e.jsx("span",{style:{fontSize:10,color:"#9ca3af",fontFamily:"sans-serif",textTransform:"capitalize"},children:s})]},s))}),args:{}},f={name:"All Variants",render:()=>{const s=["xs","s","m","l","xl"],x=[{label:"Image",props:{src:"https://i.pravatar.cc/128?img=12",alt:"User"}},{label:"Initials",props:{initials:"AB"}},{label:"Fallback",props:{}},{label:"Online",props:{initials:"CD",status:"online"}},{label:"Away",props:{initials:"CD",status:"away"}},{label:"Busy",props:{initials:"CD",status:"busy"}},{label:"Offline",props:{initials:"CD",status:"offline"}}];return e.jsx("div",{style:{fontFamily:"sans-serif",overflowX:"auto"},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`120px repeat(${s.length}, 64px)`,gap:"16px 8px",alignItems:"center"},children:[e.jsx("div",{}),s.map(n=>e.jsx("div",{style:{fontSize:11,color:"#9ca3af",textAlign:"center"},children:n.toUpperCase()},n)),x.map(({label:n,props:h})=>e.jsxs(v.Fragment,{children:[e.jsx("div",{style:{fontSize:12,color:"#6b7280"},children:n}),s.map(i=>e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(u,{size:i,...h})},i))]},n))]})})},args:{}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    initials: 'JD'
  }
}`,...r.parameters?.docs?.source},description:{story:"Interactive playground — use controls to change size, status, and content",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/128?img=47',
    alt: 'Jane Doe'
  }
}`,...o.parameters?.docs?.source},description:{story:"Avatar with a photo",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    initials: 'AB'
  }
}`,...l.parameters?.docs?.source},description:{story:"Avatar with initials — shown when no image is provided",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...c.parameters?.docs?.source},description:{story:"Default icon fallback — shown when no image or initials are provided",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://broken.url/image.png',
    alt: 'Broken'
  }
}`,...p.parameters?.docs?.source},description:{story:"Broken image URL falls back gracefully to the icon",...p.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
        color: '#9ca3af',
        fontFamily: 'sans-serif'
      }}>
            {size.toUpperCase()}
          </span>
        </div>)}
    </div>,
  args: {}
}`,...d.parameters?.docs?.source},description:{story:"All five sizes side by side",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        color: '#9ca3af',
        fontFamily: 'sans-serif',
        textTransform: 'capitalize'
      }}>
            {status}
          </span>
        </div>)}
    </div>,
  args: {}
}`,...m.parameters?.docs?.source},description:{story:"All status indicators",...m.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
      fontFamily: 'sans-serif',
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
          color: '#9ca3af',
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
            color: '#6b7280'
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
}`,...f.parameters?.docs?.source},description:{story:"Every combination of content type × size",...f.parameters?.docs?.description}}};const E=["Default","WithImage","WithInitials","WithFallback","BrokenImage","AllSizes","AllStatuses","AllVariants"];export{d as AllSizes,m as AllStatuses,f as AllVariants,p as BrokenImage,r as Default,c as WithFallback,o as WithImage,l as WithInitials,E as __namedExportsOrder,U as default};
