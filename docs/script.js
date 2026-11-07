const toggle=document.querySelector('.menu-toggle');const mobile=document.querySelector('.mobile-nav');if(toggle&&mobile){toggle.addEventListener('click',()=>{const open=mobile.classList.toggle('open');document.body.classList.toggle('menu-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobile.classList.remove('open');document.body.classList.remove('menu-open');toggle.textContent='☰'}))}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const form=document.querySelector('#consultForm');
if(form){
 const need=form.elements.need, fields=document.querySelector('#journeyFields');
 const title=document.querySelector('#registrationTitle');
 const labels={general:'Tư vấn lựa chọn phù hợp',journey:'Hành trình Chuyển hóa bền vững','one-to-one':'Đồng hành 1:1',stones:'Tư vấn vòng đá phù hợp'};
 const requested=new URLSearchParams(location.search).get('need');
 if(requested&&[...need.options].some(o=>o.value===requested))need.value=requested;
 else if(requested){need.add(new Option(requested,requested));need.value=requested;}
 function update(){const journey=need.value==='journey';if(fields){fields.hidden=!journey;fields.disabled=!journey;}
 if(title)title.textContent=journey?'Đăng ký tham gia Hành trình':need.value==='one-to-one'?'Đăng ký đồng hành 1:1':need.value==='stones'?'Đăng ký tư vấn vòng đá':'Đăng ký tư vấn';
 const summary=document.querySelector('#formatSummary');if(summary&&journey){const f=form.elements.format.value;summary.textContent=f==='online'?'Online: 5 buổi tối, mỗi buổi 1 giờ 30 phút, học qua Zoom. Chi phí: 1.500.000đ/khóa/giai đoạn.':f==='offline'?'Offline: 1 ngày, 8 tiếng, học trực tiếp tại văn phòng Amber Healing, TP.HCM. Chi phí: 3.000.000đ/khóa/giai đoạn.':'Online: 5 buổi tối × 1 giờ 30 phút, qua Zoom. Offline: 1 ngày, 8 tiếng tại văn phòng Amber Healing, TP.HCM. Chi phí áp dụng riêng cho từng giai đoạn.';}}
 need.addEventListener('change',update);form.elements.format?.addEventListener('change',update);update();
 form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);
 const lines=['Chào Amber Healing, mình muốn đăng ký '+(labels[data.get('need')]||data.get('need'))+'.','Họ và tên: '+data.get('name'),'Số điện thoại/Zalo: '+data.get('phone'),'Email: '+data.get('email')];
 if(need.value==='journey'){lines.push(data.get('stage'));lines.push(data.get('format')==='online'?'Online — 5 buổi tối × 1 giờ 30 phút, qua Zoom. Chi phí: 1.500.000đ/khóa/giai đoạn.':'Offline — 1 ngày, 8 tiếng tại văn phòng Amber Healing, TP.HCM. Chi phí: 3.000.000đ/khóa/giai đoạn.');}
 if(data.get('message'))lines.push('Điều mình mong muốn thay đổi: '+data.get('message'));
 document.querySelector('#preparedMessage').value=lines.join('\n');document.querySelector('#messagePreview').hidden=false;
 document.querySelector('#formStatus').textContent='Nội dung đã được chuẩn bị, chưa gửi đến Amber. Hãy sao chép và gửi qua Zalo để hoàn tất đăng ký.';
 document.querySelector('#messagePreview').scrollIntoView({behavior:'smooth',block:'center'});
 });
 document.querySelector('#copyMessage')?.addEventListener('click',async()=>{const box=document.querySelector('#preparedMessage');try{await navigator.clipboard.writeText(box.value);document.querySelector('#formStatus').textContent='Đã sao chép. Bạn hãy dán và gửi tin nhắn cho Amber qua Zalo để hoàn tất đăng ký.';}catch{box.focus();box.select();document.querySelector('#formStatus').textContent='Hãy sao chép nội dung trong ô bên dưới rồi gửi cho Amber qua Zalo.';}});
}
