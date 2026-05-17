// ─── DATA STORE ─────────────────────────────────────────────────────────────

const SEED = {
  projects: [
    { id: 'bluehouse', name: 'BlueHouse Properties', color: '#2563eb', desc: 'WordPress/Houzez real estate site for Ghana', status: 'active' },
    { id: 'afrihauler', name: 'AfriHauler', color: '#E8500A', desc: 'Ghana\'s premier haulage marketplace (React Native + Next.js)', status: 'active' },
    { id: 'sparesgh', name: 'SparesGH', color: '#22c55e', desc: 'Auto spare parts marketplace — Abossey Okai & Suame Magazine', status: 'active' },
  ],
  epics: [
    // BlueHouse
    { id: 'bh-e1', projectId: 'bluehouse', title: 'Website Restore & Hosting', order: 1 },
    { id: 'bh-e2', projectId: 'bluehouse', title: 'Design & Branding', order: 2 },
    { id: 'bh-e3', projectId: 'bluehouse', title: 'Listings & Content', order: 3 },
    // AfriHauler
    { id: 'ah-e1', projectId: 'afrihauler', title: 'Platform Core', order: 1 },
    { id: 'ah-e2', projectId: 'afrihauler', title: 'Driver & Haulage Flow', order: 2 },
    { id: 'ah-e3', projectId: 'afrihauler', title: 'Admin Dashboard', order: 3 },
    { id: 'ah-e4', projectId: 'afrihauler', title: 'Growth & Partnerships', order: 4 },
    // SparesGH
    { id: 'sg-e1', projectId: 'sparesgh', title: 'Authentication', order: 1 },
    { id: 'sg-e2', projectId: 'sparesgh', title: 'Buyer Flow', order: 2 },
    { id: 'sg-e3', projectId: 'sparesgh', title: 'Seller Flow', order: 3 },
    { id: 'sg-e4', projectId: 'sparesgh', title: 'Distribution', order: 4 },
  ],
  tickets: [
    // BlueHouse
    { id: 'BH-1', epicId: 'bh-e1', projectId: 'bluehouse', title: 'SFTP/FileZilla access via IONOS', status: 'done', priority: 'high', notes: 'Created SFTP account, connected via FileZilla' },
    { id: 'BH-2', epicId: 'bh-e1', projectId: 'bluehouse', title: 'Upload .wpress backup file', status: 'done', priority: 'high', notes: '.wpress uploaded to wp-content/uploads/backups' },
    { id: 'BH-3', epicId: 'bh-e1', projectId: 'bluehouse', title: 'Fix file permissions (chmod 644)', status: 'done', priority: 'high', notes: 'Changed from 0604 to 644 via FileZilla' },
    { id: 'BH-4', epicId: 'bh-e1', projectId: 'bluehouse', title: 'Increase PHP limits (memory/upload/time)', status: 'inprogress', priority: 'high', notes: 'Can\'t access WordPress root .htaccess via SFTP chroot. Need IONOS help.' },
    { id: 'BH-5', epicId: 'bh-e1', projectId: 'bluehouse', title: 'Complete site restore via All-in-One WP Migration', status: 'inprogress', priority: 'high', notes: 'JS console trick bypasses premium. Blocked by PHP limits.' },
    { id: 'BH-6', epicId: 'bh-e2', projectId: 'bluehouse', title: 'Logo and brand colours consistent', status: 'todo', priority: 'medium', notes: '' },
    { id: 'BH-7', epicId: 'bh-e3', projectId: 'bluehouse', title: 'Add property listings', status: 'todo', priority: 'medium', notes: '' },
    // AfriHauler
    { id: 'AH-1', epicId: 'ah-e1', projectId: 'afrihauler', title: 'React Native mobile app (iOS + Android)', status: 'done', priority: 'high', notes: 'Core flows working' },
    { id: 'AH-2', epicId: 'ah-e1', projectId: 'afrihauler', title: 'Next.js web platform', status: 'done', priority: 'high', notes: '' },
    { id: 'AH-3', epicId: 'ah-e1', projectId: 'afrihauler', title: 'Supabase backend', status: 'done', priority: 'high', notes: 'Project: malbtjquhokmitatdpbl' },
    { id: 'AH-4', epicId: 'ah-e1', projectId: 'afrihauler', title: 'Paystack payment integration', status: 'done', priority: 'high', notes: '' },
    { id: 'AH-5', epicId: 'ah-e2', projectId: 'afrihauler', title: 'Driver onboarding & verification', status: 'done', priority: 'high', notes: '' },
    { id: 'AH-6', epicId: 'ah-e2', projectId: 'afrihauler', title: 'Haulage request & booking flow', status: 'done', priority: 'high', notes: 'Phases 1-3 complete' },
    { id: 'AH-7', epicId: 'ah-e2', projectId: 'afrihauler', title: 'Custom domain setup', status: 'inprogress', priority: 'medium', notes: 'afrihauler.com — pending DNS config' },
    { id: 'AH-8', epicId: 'ah-e3', projectId: 'afrihauler', title: 'Admin dashboard delivered', status: 'done', priority: 'high', notes: '' },
    { id: 'AH-9', epicId: 'ah-e4', projectId: 'afrihauler', title: 'Drivers page (website)', status: 'todo', priority: 'medium', notes: '' },
    { id: 'AH-10', epicId: 'ah-e4', projectId: 'afrihauler', title: 'DMARC upgrade p=none → p=quarantine', status: 'todo', priority: 'medium', notes: 'Wait ~2-4 weeks after p=none, then upgrade' },
    { id: 'AH-11', epicId: 'ah-e4', projectId: 'afrihauler', title: 'GOIL partnership: awaiting response to proposal', status: 'inprogress', priority: 'high', notes: 'Proposal sent April 2026. No response yet. Follow up if no reply by end of May 2026.' },
    { id: 'AH-12', epicId: 'ah-e4', projectId: 'afrihauler', title: 'DVLA: Build dvla-verify Edge Function', status: 'done', priority: 'high', notes: 'Validates Ghana Card + vehicle plate format, calls api.dvla.gov.gh/v1/verify, writes immutable audit log to dvla_verification_logs' },
    { id: 'AH-13', epicId: 'ah-e4', projectId: 'afrihauler', title: 'DVLA: Send formal proposal under AfriHauler company name', status: 'todo', priority: 'high', notes: 'DVLA have a ready API suited for the platform. Waiting for AfriHauler company registration to complete before sending proposal. DVLA already expressed interest.' },
    { id: 'AH-14', epicId: 'ah-e4', projectId: 'afrihauler', title: 'DVLA: Obtain API credentials (DVLA_GATEWAY_KEY + DVLA_CLIENT_SECRET)', status: 'todo', priority: 'high', notes: 'Blocked on AH-13. Credentials issued after formal proposal submitted under registered company name.' },
    { id: 'AH-15', epicId: 'ah-e4', projectId: 'afrihauler', title: 'DVLA: Wire verification into transporter onboarding UI', status: 'todo', priority: 'high', notes: 'Transporter wizard step: Ghana Card + vehicle plate check before account activation' },
    { id: 'AH-16', epicId: 'ah-e4', projectId: 'afrihauler', title: 'Enterprise Insurance: Technical presentation meeting', status: 'done', priority: 'high', notes: 'Met with EIC technical team. Presented full app flow. EIC are now scoping a custom API — they have no existing platform-integration API. Next step: await their API development timeline.' },
    { id: 'AH-17', epicId: 'ah-e4', projectId: 'afrihauler', title: 'Enterprise Insurance: Receive custom API docs from EIC', status: 'inprogress', priority: 'high', notes: 'EIC developing API tailored for AfriHauler. Blocked until they deliver docs + sandbox access.' },
    { id: 'AH-18', epicId: 'ah-e4', projectId: 'afrihauler', title: 'Enterprise Insurance: Policy Verification API — confirm motor + GIT cover in real time', status: 'todo', priority: 'high', notes: 'Blocked on AH-17. Edge Function to validate active policy before transporter can accept a job.' },
    { id: 'AH-19', epicId: 'ah-e4', projectId: 'afrihauler', title: 'Enterprise Insurance: Policy Issuance API — issue GIT cover per trip inside app', status: 'todo', priority: 'high', notes: 'Blocked on AH-17. Customer or transporter can take out Goods-in-Transit cover at job posting.' },
    { id: 'AH-20', epicId: 'ah-e4', projectId: 'afrihauler', title: 'Enterprise Insurance: Policy Renewal API — automated reminders + renewal flow', status: 'todo', priority: 'medium', notes: 'Blocked on AH-17. Push notification + in-app renewal trigger before policy expiry.' },
    { id: 'AH-21', epicId: 'ah-e4', projectId: 'afrihauler', title: 'Enterprise Insurance: Claims Initiation API — digital claim with GPS trip data', status: 'todo', priority: 'medium', notes: 'Optional per proposal. Attach job GPS log + cargo photos to claim submission.' },
    // SparesGH
    { id: 'SG-1', epicId: 'sg-e1', projectId: 'sparesgh', title: 'Phone OTP auth (Africa\'s Talking)', status: 'done', priority: 'high', notes: 'AT username: spearsgh (typo, can\'t change). Working end-to-end.' },
    { id: 'SG-2', epicId: 'sg-e1', projectId: 'sparesgh', title: 'Seller verification routing on login', status: 'done', priority: 'high', notes: 'Always routes sellers to profile unless approved' },
    { id: 'SG-3', epicId: 'sg-e2', projectId: 'sparesgh', title: 'Buyer: post part request (3-step wizard)', status: 'done', priority: 'high', notes: '' },
    { id: 'SG-4', epicId: 'sg-e2', projectId: 'sparesgh', title: 'Buyer: view quotes & accept', status: 'done', priority: 'high', notes: '' },
    { id: 'SG-5', epicId: 'sg-e2', projectId: 'sparesgh', title: 'Buyer: WhatsApp seller on accept', status: 'done', priority: 'high', notes: '' },
    { id: 'SG-6', epicId: 'sg-e3', projectId: 'sparesgh', title: 'Seller: profile & verification screen', status: 'done', priority: 'high', notes: '' },
    { id: 'SG-7', epicId: 'sg-e3', projectId: 'sparesgh', title: 'Seller: view & filter requests by market', status: 'done', priority: 'high', notes: '' },
    { id: 'SG-8', epicId: 'sg-e3', projectId: 'sparesgh', title: 'Seller: send quote flow', status: 'done', priority: 'high', notes: '' },
    { id: 'SG-9', epicId: 'sg-e4', projectId: 'sparesgh', title: 'Android APK build (EAS)', status: 'todo', priority: 'high', notes: 'slug=partfinder for EAS, display name=SparesGH' },
    { id: 'SG-10', epicId: 'sg-e4', projectId: 'sparesgh', title: 'iOS build & App Store submission', status: 'inprogress', priority: 'high', notes: 'Apple Developer enrollment in progress (Individual)' },
    { id: 'SG-11', epicId: 'sg-e4', projectId: 'sparesgh', title: 'Onboard real sellers — Abossey Okai & Suame Magazine', status: 'todo', priority: 'high', notes: 'Papa Nii has contacts at both markets' },
  ],
  tests: [
    { id: 'T-1', projectId: 'sparesgh', title: 'OTP send via Africa\'s Talking SMS', status: 'passed', area: 'Auth', notes: 'Confirmed working after AT wallet top-up' },
    { id: 'T-2', projectId: 'sparesgh', title: 'OTP verify — new user registration', status: 'passed', area: 'Auth', notes: '' },
    { id: 'T-3', projectId: 'sparesgh', title: 'OTP verify — existing user login', status: 'passed', area: 'Auth', notes: '' },
    { id: 'T-4', projectId: 'sparesgh', title: 'Seller login → verification screen redirect', status: 'passed', area: 'Auth', notes: '' },
    { id: 'T-5', projectId: 'sparesgh', title: 'Buyer: submit part request 3-step wizard', status: 'passed', area: 'Buyer Flow', notes: '' },
    { id: 'T-6', projectId: 'sparesgh', title: 'Seller: see buyer requests filtered by market', status: 'passed', area: 'Seller Flow', notes: '' },
    { id: 'T-7', projectId: 'sparesgh', title: 'Seller: send quote to buyer', status: 'passed', area: 'Seller Flow', notes: '' },
    { id: 'T-8', projectId: 'sparesgh', title: 'Buyer: accept quote → WhatsApp seller', status: 'passed', area: 'Buyer Flow', notes: '' },
    { id: 'T-9', projectId: 'sparesgh', title: 'Approved seller routes to /(seller) not profile', status: 'pending', area: 'Auth', notes: 'Need approved seller to test' },
    { id: 'T-10', projectId: 'afrihauler', title: 'Haulage request booking end-to-end', status: 'passed', area: 'Core Flow', notes: '' },
    { id: 'T-11', projectId: 'afrihauler', title: 'Paystack payment processing', status: 'passed', area: 'Payments', notes: '' },
    { id: 'T-12', projectId: 'afrihauler', title: 'Admin dashboard — view all bookings', status: 'passed', area: 'Admin', notes: '' },
    { id: 'T-13', projectId: 'bluehouse', title: 'Site restore from .wpress backup', status: 'failed', area: 'Infrastructure', notes: 'Blocked: PHP memory/upload limits. IONOS support needed.' },
  ],
  transactions: [
    { id: 'F-1', projectId: 'afrihauler', type: 'expense', category: 'Infrastructure', amount: 0, currency: 'GHS', description: 'Supabase Pro (if needed)', date: '2026-04-01', notes: '' },
    { id: 'F-2', projectId: 'sparesgh', type: 'expense', category: 'SMS', amount: 50, currency: 'GHS', description: 'Africa\'s Talking SMS credits top-up', date: '2026-04-01', notes: 'AT wallet' },
    { id: 'F-3', projectId: 'sparesgh', type: 'expense', category: 'Developer', amount: 99, currency: 'USD', description: 'Apple Developer Program (Individual)', date: '2026-05-01', notes: 'Annual fee' },
  ],
};

const DB_KEY = 'papa_tracker_v2';

function loadDB() {
  try {
    const raw = localStorage.getItem(DB_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  const db = JSON.parse(JSON.stringify(SEED));
  saveDB(db);
  return db;
}

function saveDB(db) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

let db = loadDB();
let selectedProject = db.projects[0]?.id || null;

// ─── HELPERS ────────────────────────────────────────────────────────────────

function uid() { return Math.random().toString(36).slice(2, 9); }
function formatCurrency(n, cur = 'GHS') { return `${cur} ${Number(n).toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`; }
function today() { return new Date().toISOString().split('T')[0]; }

function statusBadge(s) {
  const map = { todo: 'todo', inprogress: 'inprogress', done: 'done', blocked: 'blocked', passed: 'passed', failed: 'failed', pending: 'pending' };
  const label = { todo: 'To Do', inprogress: 'In Progress', done: 'Done', blocked: 'Blocked', passed: 'Passed', failed: 'Failed', pending: 'Pending' };
  return `<span class="badge badge-${map[s] || s}">${label[s] || s}</span>`;
}

function priorityBadge(p) {
  return `<span class="badge badge-${p}">${p.charAt(0).toUpperCase() + p.slice(1)}</span>`;
}

// ─── NAV ─────────────────────────────────────────────────────────────────────

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('page-' + name)?.classList.add('active');
  document.querySelector(`[data-page="${name}"]`)?.classList.add('active');
  if (name === 'projects') renderProjects();
  if (name === 'tests') renderTests();
  if (name === 'finance') renderFinance();
}

// ─── PROJECTS PAGE ───────────────────────────────────────────────────────────

function renderProjects() {
  renderProjectCards();
  renderEpicsAndTickets();
}

function getProjectStats(pid) {
  const tickets = db.tickets.filter(t => t.projectId === pid);
  const done = tickets.filter(t => t.status === 'done').length;
  const inprogress = tickets.filter(t => t.status === 'inprogress').length;
  return { total: tickets.length, done, inprogress, todo: tickets.filter(t => t.status === 'todo').length };
}

function renderProjectCards() {
  const container = document.getElementById('project-cards');
  container.innerHTML = db.projects.map(p => {
    const s = getProjectStats(p.id);
    const pct = s.total ? Math.round((s.done / s.total) * 100) : 0;
    return `
      <div class="project-card ${selectedProject === p.id ? 'selected' : ''}" onclick="selectProject('${p.id}')">
        <div class="project-name" style="color:${p.color}">${p.name}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-stats">
          <div class="project-stat"><div class="project-stat-num">${s.total}</div><div class="project-stat-label">Tickets</div></div>
          <div class="project-stat"><div class="project-stat-num" style="color:var(--success)">${s.done}</div><div class="project-stat-label">Done</div></div>
          <div class="project-stat"><div class="project-stat-num" style="color:var(--info)">${s.inprogress}</div><div class="project-stat-label">Active</div></div>
          <div class="project-stat"><div class="project-stat-num">${pct}%</div><div class="project-stat-label">Complete</div></div>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%;background:${p.color}"></div></div>
      </div>`;
  }).join('');
}

function selectProject(pid) {
  selectedProject = pid;
  renderProjects();
}

function renderEpicsAndTickets() {
  const filter = document.getElementById('ticket-filter')?.value?.toLowerCase() || '';
  const statusFilter = document.getElementById('status-filter')?.value || '';
  const container = document.getElementById('epics-container');
  if (!selectedProject) { container.innerHTML = '<div class="empty"><div class="empty-icon">📋</div><div class="empty-text">Select a project above</div></div>'; return; }

  const epics = db.epics.filter(e => e.projectId === selectedProject);
  if (!epics.length) { container.innerHTML = '<div class="empty"><div class="empty-icon">📋</div><div class="empty-text">No epics yet</div></div>'; return; }

  const proj = db.projects.find(p => p.id === selectedProject);
  container.innerHTML = epics.map(epic => {
    let tickets = db.tickets.filter(t => t.epicId === epic.id);
    if (filter) tickets = tickets.filter(t => t.title.toLowerCase().includes(filter) || t.id.toLowerCase().includes(filter));
    if (statusFilter) tickets = tickets.filter(t => t.status === statusFilter);
    const done = tickets.filter(t => t.status === 'done').length;

    const ticketHTML = tickets.length ? tickets.map(t => `
      <div class="ticket">
        <div class="ticket-info">
          <div class="ticket-title">${t.title}</div>
          <div class="ticket-meta">
            <span class="ticket-id">${t.id}</span>
            ${statusBadge(t.status)}
            ${priorityBadge(t.priority)}
            ${t.notes ? `<span style="font-size:11px;color:var(--subtext)" title="${t.notes}">📝 note</span>` : ''}
          </div>
        </div>
        <div class="ticket-actions">
          <select class="btn btn-sm btn-ghost" onchange="changeTicketStatus('${t.id}', this.value)" style="padding:3px 6px;font-size:11px;">
            <option value="todo" ${t.status === 'todo' ? 'selected' : ''}>To Do</option>
            <option value="inprogress" ${t.status === 'inprogress' ? 'selected' : ''}>In Progress</option>
            <option value="done" ${t.status === 'done' ? 'selected' : ''}>Done</option>
            <option value="blocked" ${t.status === 'blocked' ? 'selected' : ''}>Blocked</option>
          </select>
          <button class="btn btn-sm btn-ghost" onclick="editTicket('${t.id}')">✏️</button>
          <button class="btn btn-sm btn-ghost" onclick="deleteTicket('${t.id}')" style="color:var(--danger)">🗑</button>
        </div>
      </div>`).join('') : '<div style="padding:12px 16px;color:var(--subtext);font-size:13px;">No tickets match filter</div>';

    return `
      <div class="epic">
        <div class="epic-header" onclick="toggleEpic('${epic.id}')">
          <div class="epic-title">
            <span style="color:${proj.color}">●</span>
            ${epic.title}
            <span style="font-size:11px;color:var(--subtext);font-weight:400">${done}/${tickets.length} done</span>
          </div>
          <div style="display:flex;align-items:center;gap:8px;">
            <button class="btn btn-sm btn-ghost" onclick="event.stopPropagation();openAddTicket('${epic.id}')">+ Ticket</button>
            <span class="epic-toggle" id="toggle-${epic.id}">▼</span>
          </div>
        </div>
        <div class="epic-body open" id="epic-${epic.id}">${ticketHTML}</div>
      </div>`;
  }).join('') + `<button class="btn btn-ghost" onclick="openAddEpic()" style="width:100%;margin-top:8px;">+ Add Epic</button>`;
}

function toggleEpic(epicId) {
  const body = document.getElementById('epic-' + epicId);
  const toggle = document.getElementById('toggle-' + epicId);
  if (body) {
    const isOpen = body.classList.toggle('open');
    if (toggle) toggle.textContent = isOpen ? '▼' : '▶';
  }
}

function changeTicketStatus(ticketId, status) {
  const t = db.tickets.find(t => t.id === ticketId);
  if (t) { t.status = status; saveDB(db); renderProjects(); }
}

function deleteTicket(ticketId) {
  if (!confirm('Delete this ticket?')) return;
  db.tickets = db.tickets.filter(t => t.id !== ticketId);
  saveDB(db); renderProjects();
}

// ─── ADD / EDIT TICKET MODAL ─────────────────────────────────────────────────

let editingTicketId = null;
let addToEpicId = null;

function openAddTicket(epicId) {
  addToEpicId = epicId;
  editingTicketId = null;
  document.getElementById('modal-ticket-title').textContent = 'Add Ticket';
  document.getElementById('t-title').value = '';
  document.getElementById('t-status').value = 'todo';
  document.getElementById('t-priority').value = 'medium';
  document.getElementById('t-notes').value = '';
  document.getElementById('modal-ticket').classList.add('open');
}

function editTicket(ticketId) {
  const t = db.tickets.find(t => t.id === ticketId);
  if (!t) return;
  editingTicketId = ticketId;
  addToEpicId = t.epicId;
  document.getElementById('modal-ticket-title').textContent = 'Edit Ticket';
  document.getElementById('t-title').value = t.title;
  document.getElementById('t-status').value = t.status;
  document.getElementById('t-priority').value = t.priority;
  document.getElementById('t-notes').value = t.notes || '';
  document.getElementById('modal-ticket').classList.add('open');
}

function saveTicket() {
  const title = document.getElementById('t-title').value.trim();
  if (!title) return alert('Enter a title');
  const status = document.getElementById('t-status').value;
  const priority = document.getElementById('t-priority').value;
  const notes = document.getElementById('t-notes').value.trim();

  if (editingTicketId) {
    const t = db.tickets.find(t => t.id === editingTicketId);
    Object.assign(t, { title, status, priority, notes });
  } else {
    const epic = db.epics.find(e => e.id === addToEpicId);
    const proj = db.projects.find(p => p.id === epic?.projectId);
    const prefix = proj?.id === 'bluehouse' ? 'BH' : proj?.id === 'afrihauler' ? 'AH' : 'SG';
    const existing = db.tickets.filter(t => t.id.startsWith(prefix + '-'));
    const nextNum = Math.max(0, ...existing.map(t => parseInt(t.id.split('-')[1]) || 0)) + 1;
    db.tickets.push({ id: `${prefix}-${nextNum}`, epicId: addToEpicId, projectId: epic.projectId, title, status, priority, notes });
  }
  saveDB(db);
  closeModal('modal-ticket');
  renderProjects();
}

function openAddEpic() {
  document.getElementById('e-title').value = '';
  document.getElementById('modal-epic').classList.add('open');
}

function saveEpic() {
  const title = document.getElementById('e-title').value.trim();
  if (!title) return alert('Enter a title');
  db.epics.push({ id: 'e-' + uid(), projectId: selectedProject, title, order: db.epics.filter(e => e.projectId === selectedProject).length + 1 });
  saveDB(db);
  closeModal('modal-epic');
  renderProjects();
}

function closeModal(id) {
  document.getElementById(id)?.classList.remove('open');
}

// ─── TESTS PAGE ──────────────────────────────────────────────────────────────

let editingTestId = null;

function renderTests() {
  const projectFilter = document.getElementById('test-project-filter')?.value || '';
  const statusFilter = document.getElementById('test-status-filter')?.value || '';
  const areaFilter = document.getElementById('test-area-filter')?.value?.toLowerCase() || '';

  let tests = [...db.tests];
  if (projectFilter) tests = tests.filter(t => t.projectId === projectFilter);
  if (statusFilter) tests = tests.filter(t => t.status === statusFilter);
  if (areaFilter) tests = tests.filter(t => t.area.toLowerCase().includes(areaFilter));

  const total = tests.length;
  const passed = tests.filter(t => t.status === 'passed').length;
  const failed = tests.filter(t => t.status === 'failed').length;
  const pending = tests.filter(t => t.status === 'pending').length;

  document.getElementById('test-stats').innerHTML = `
    <div class="stat-pill"><div class="stat-pill-num">${total}</div><div class="stat-pill-label">Total</div></div>
    <div class="stat-pill"><div class="stat-pill-num" style="color:var(--success)">${passed}</div><div class="stat-pill-label">Passed</div></div>
    <div class="stat-pill"><div class="stat-pill-num" style="color:var(--danger)">${failed}</div><div class="stat-pill-label">Failed</div></div>
    <div class="stat-pill"><div class="stat-pill-num" style="color:var(--warning)">${pending}</div><div class="stat-pill-label">Pending</div></div>
    <div class="stat-pill"><div class="stat-pill-num" style="color:var(--primary)">${total ? Math.round((passed/total)*100) : 0}%</div><div class="stat-pill-label">Pass Rate</div></div>
  `;

  const tbody = document.getElementById('tests-tbody');
  if (!tests.length) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:30px;color:var(--subtext)">No tests found</td></tr>';
    return;
  }
  tbody.innerHTML = tests.map(t => {
    const proj = db.projects.find(p => p.id === t.projectId);
    return `<tr>
      <td><span class="ticket-id">${t.id}</span></td>
      <td><strong>${t.title}</strong>${t.notes ? `<br><span style="font-size:11px;color:var(--subtext)">${t.notes}</span>` : ''}</td>
      <td><span style="font-size:12px;color:${proj?.color}">${proj?.name || t.projectId}</span></td>
      <td>${t.area}</td>
      <td>${statusBadge(t.status)}</td>
      <td style="white-space:nowrap">
        <select class="btn btn-sm btn-ghost" onchange="changeTestStatus('${t.id}', this.value)" style="padding:3px 6px;font-size:11px;">
          <option value="pending" ${t.status==='pending'?'selected':''}>Pending</option>
          <option value="passed" ${t.status==='passed'?'selected':''}>Passed</option>
          <option value="failed" ${t.status==='failed'?'selected':''}>Failed</option>
        </select>
        <button class="btn btn-sm btn-ghost" onclick="editTest('${t.id}')">✏️</button>
        <button class="btn btn-sm btn-ghost" onclick="deleteTest('${t.id}')" style="color:var(--danger)">🗑</button>
      </td>
    </tr>`;
  }).join('');
}

function changeTestStatus(id, status) {
  const t = db.tests.find(t => t.id === id);
  if (t) { t.status = status; saveDB(db); renderTests(); }
}

function deleteTest(id) {
  if (!confirm('Delete this test case?')) return;
  db.tests = db.tests.filter(t => t.id !== id);
  saveDB(db); renderTests();
}

function openAddTest() {
  editingTestId = null;
  document.getElementById('modal-test-title').textContent = 'Add Test Case';
  document.getElementById('tt-title').value = '';
  document.getElementById('tt-project').value = db.projects[0]?.id || '';
  document.getElementById('tt-area').value = '';
  document.getElementById('tt-status').value = 'pending';
  document.getElementById('tt-notes').value = '';
  document.getElementById('modal-test').classList.add('open');
}

function editTest(id) {
  const t = db.tests.find(t => t.id === id);
  if (!t) return;
  editingTestId = id;
  document.getElementById('modal-test-title').textContent = 'Edit Test Case';
  document.getElementById('tt-title').value = t.title;
  document.getElementById('tt-project').value = t.projectId;
  document.getElementById('tt-area').value = t.area;
  document.getElementById('tt-status').value = t.status;
  document.getElementById('tt-notes').value = t.notes || '';
  document.getElementById('modal-test').classList.add('open');
}

function saveTest() {
  const title = document.getElementById('tt-title').value.trim();
  if (!title) return alert('Enter a title');
  const projectId = document.getElementById('tt-project').value;
  const area = document.getElementById('tt-area').value.trim() || 'General';
  const status = document.getElementById('tt-status').value;
  const notes = document.getElementById('tt-notes').value.trim();

  if (editingTestId) {
    const t = db.tests.find(t => t.id === editingTestId);
    Object.assign(t, { title, projectId, area, status, notes });
  } else {
    const existing = db.tests.map(t => parseInt(t.id.replace('T-', '')) || 0);
    const nextNum = Math.max(0, ...existing) + 1;
    db.tests.push({ id: `T-${nextNum}`, projectId, title, area, status, notes });
  }
  saveDB(db);
  closeModal('modal-test');
  renderTests();
}

// ─── FINANCE PAGE ─────────────────────────────────────────────────────────────

let editingTransId = null;

function renderFinance() {
  const projectFilter = document.getElementById('fin-project-filter')?.value || '';
  const typeFilter = document.getElementById('fin-type-filter')?.value || '';

  let txns = [...db.transactions];
  if (projectFilter) txns = txns.filter(t => t.projectId === projectFilter);
  if (typeFilter) txns = txns.filter(t => t.type === typeFilter);

  const toGHS = (t) => t.currency === 'USD' ? t.amount * 15.5 : t.amount;
  const totalIncome = db.transactions.filter(t => t.type === 'income').reduce((s, t) => s + toGHS(t), 0);
  const totalExpense = db.transactions.filter(t => t.type === 'expense').reduce((s, t) => s + toGHS(t), 0);
  const net = totalIncome - totalExpense;

  document.getElementById('fin-summary').innerHTML = `
    <div class="fin-card"><div class="fin-card-label">Total Income</div><div class="fin-card-amount income">${formatCurrency(totalIncome)}</div></div>
    <div class="fin-card"><div class="fin-card-label">Total Expenses</div><div class="fin-card-amount expense">${formatCurrency(totalExpense)}</div></div>
    <div class="fin-card"><div class="fin-card-label">Net</div><div class="fin-card-amount net">${formatCurrency(net)}</div></div>
  `;

  const tbody = document.getElementById('finance-tbody');
  if (!txns.length) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:30px;color:var(--subtext)">No transactions yet</td></tr>';
    return;
  }
  tbody.innerHTML = txns.map(t => {
    const proj = db.projects.find(p => p.id === t.projectId);
    return `<tr>
      <td>${t.date}</td>
      <td><strong>${t.description}</strong></td>
      <td><span style="font-size:12px;color:${proj?.color}">${proj?.name || t.projectId}</span></td>
      <td>${t.category}</td>
      <td><span class="badge badge-${t.type}">${t.type.charAt(0).toUpperCase() + t.type.slice(1)}</span></td>
      <td style="font-weight:600;color:${t.type === 'income' ? 'var(--success)' : 'var(--danger)'}">${t.type === 'expense' ? '-' : '+'}${formatCurrency(t.amount, t.currency)}</td>
      <td style="white-space:nowrap">
        <button class="btn btn-sm btn-ghost" onclick="editTransaction('${t.id}')">✏️</button>
        <button class="btn btn-sm btn-ghost" onclick="deleteTransaction('${t.id}')" style="color:var(--danger)">🗑</button>
      </td>
    </tr>`;
  }).join('');
}

function openAddTransaction() {
  editingTransId = null;
  document.getElementById('modal-fin-title').textContent = 'Add Transaction';
  document.getElementById('f-desc').value = '';
  document.getElementById('f-project').value = db.projects[0]?.id || '';
  document.getElementById('f-type').value = 'expense';
  document.getElementById('f-category').value = '';
  document.getElementById('f-amount').value = '';
  document.getElementById('f-currency').value = 'GHS';
  document.getElementById('f-date').value = today();
  document.getElementById('modal-fin').classList.add('open');
}

function editTransaction(id) {
  const t = db.transactions.find(t => t.id === id);
  if (!t) return;
  editingTransId = id;
  document.getElementById('modal-fin-title').textContent = 'Edit Transaction';
  document.getElementById('f-desc').value = t.description;
  document.getElementById('f-project').value = t.projectId;
  document.getElementById('f-type').value = t.type;
  document.getElementById('f-category').value = t.category;
  document.getElementById('f-amount').value = t.amount;
  document.getElementById('f-currency').value = t.currency;
  document.getElementById('f-date').value = t.date;
  document.getElementById('modal-fin').classList.add('open');
}

function deleteTransaction(id) {
  if (!confirm('Delete this transaction?')) return;
  db.transactions = db.transactions.filter(t => t.id !== id);
  saveDB(db); renderFinance();
}

function saveTransaction() {
  const description = document.getElementById('f-desc').value.trim();
  if (!description) return alert('Enter a description');
  const projectId = document.getElementById('f-project').value;
  const type = document.getElementById('f-type').value;
  const category = document.getElementById('f-category').value.trim() || 'General';
  const amount = parseFloat(document.getElementById('f-amount').value) || 0;
  const currency = document.getElementById('f-currency').value;
  const date = document.getElementById('f-date').value || today();

  if (editingTransId) {
    const t = db.transactions.find(t => t.id === editingTransId);
    Object.assign(t, { description, projectId, type, category, amount, currency, date });
  } else {
    const existing = db.transactions.map(t => parseInt(t.id.replace('F-', '')) || 0);
    const nextNum = Math.max(0, ...existing) + 1;
    db.transactions.push({ id: `F-${nextNum}`, projectId, type, category, amount, currency, description, date, notes: '' });
  }
  saveDB(db);
  closeModal('modal-fin');
  renderFinance();
}

// ─── PROJECT SELECT DROPDOWNS ─────────────────────────────────────────────────

function populateProjectSelects() {
  const opts = db.projects.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
  ['test-project-filter', 'fin-project-filter', 'tt-project', 'f-project'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const isFilter = id.includes('filter');
    el.innerHTML = (isFilter ? '<option value="">All Projects</option>' : '') + opts;
  });
}

// ─── RESET ────────────────────────────────────────────────────────────────────

function resetData() {
  if (!confirm('Reset ALL data to defaults? This cannot be undone.')) return;
  localStorage.removeItem(DB_KEY);
  db = loadDB();
  populateProjectSelects();
  renderProjects();
  alert('Data reset to defaults.');
}

// ─── INIT ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  populateProjectSelects();
  showPage('projects');

  // live filter for tickets
  document.getElementById('ticket-filter')?.addEventListener('input', renderEpicsAndTickets);
  document.getElementById('status-filter')?.addEventListener('change', renderEpicsAndTickets);

  // live filter for tests
  ['test-project-filter','test-status-filter','test-area-filter'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', renderTests);
    document.getElementById(id)?.addEventListener('input', renderTests);
  });

  // live filter for finance
  ['fin-project-filter','fin-type-filter'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', renderFinance);
  });

  // close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
  });
});
