export const translations = {
    en: {
        nav: {
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact',
        },
        landing: {
            greeting: "Hello, I'm Apichan Chaiyutthasat",
            intro: "A Software Engineer specializing in building high-performance web applications.",
            button: 'View My Work',
        },
        projects: {
            title: 'Projects',
            project1: {
                title: 'On-Demand Scoped Sync for Hospital Appointment System',
                summary: 'A project to optimize a hospital\'s appointment system by shifting from bulk data processing to an on-demand, user-triggered synchronization mechanism.',
                details: `
                    <h4 class="text-2xl font-bold mb-4">1. The Challenge (Evolution of Problem)</h4>
                    <p class="text-lg mb-2"><strong class="font-semibold">Initial Problem:</strong> The goal was to reduce the load on the hospital\'s server, so the initial approach was to pre-sync 6 months of data (Batch Processing).</p>
                    <div class="pl-4 border-l-4 border-accent dark:border-accent-dark">
                        <p class="text-lg font-semibold mb-2 text-red-600 dark:text-red-400">Pain Points:</p>
                        <ul class="list-disc list-inside space-y-2">
                            <li><strong class="font-semibold">Integrity:</strong> The data volume was massive (Bulk Data), leading to occasional failed or incomplete data fetches.</li>
                            <li><strong class="font-semibold">Stale Data:</strong> Data was not updated in real-time, causing conflicts (e.g., a doctor sees an available slot, but it has already been booked).</li>
                        </ul>
                    </div>
                    <div class="mt-8">
                        <h4 class="text-2xl font-bold mb-4">2. The Solution: "On-Demand Scoped Sync"</h4>
                        <p class="text-lg mb-2">Shifted from a Scheduled Bulk Sync to an On-Demand Sync using the following techniques:</p>
                        <ul class="list-disc list-inside space-y-2 pl-4">
                            <li><strong class="font-semibold">Trigger by Action:</strong> The system initiates a sync only when a doctor views the appointment schedule.</li>
                            <li><strong class="font-semibold">Scope Reduction:</strong> Instead of pulling 6 months of data at once, it now fetches only the specific month the doctor is currently viewing (Time-Window filtering).</li>
                        </ul>
                    </div>
                    <div class="mt-8">
                        <h4 class="text-2xl font-bold mb-4">3. Architecture & Tech Stack</h4>
                        <p class="text-lg mb-2"><strong class="font-semibold">Stack:</strong> React Native (Mobile), NestJS (API), Postgres (DB), AWS EKS & Aurora</p>
                        <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm">
                            <p class="font-bold mb-2">Flow:</p>
                            <ol class="list-decimal list-inside space-y-1">
                                <li>User opens the calendar for "January".</li>
                                <li>Backend receives the request → Queries the hospital\'s Legacy System specifically for the "January" time frame.</li>
                                <li>The new data is updated in Postgres (Upsert) → The data is returned to the user.</li>
                            </ol>
                            <p class="font-bold mt-4 mb-2">Maintenance:</p>
                            <p>A system with VACUUM and auto-delete for old data is in place to prevent long-term table bloat.</p>
                        </div>
                    </div>
                    <div class="mt-8">
                        <h4 class="text-2xl font-bold mb-4">4. Key Outcome</h4>
                        <ul class="list-disc list-inside space-y-2 pl-4">
                            <li><strong class="font-semibold">Data Accuracy:</strong> Significantly reduced data conflicts, and data freshness was much higher.</li>
                            <li><strong class="font-semibold">Performance:</strong> Massively reduced the load on the Legacy Server because data is fetched in small chunks and only when necessary.</li>
                            <li><strong class="font-semibold">User Experience:</strong> Doctors receive accurate information in exchange for a slight increase in initial load latency (which was acceptable given the improved data accuracy).</li>
                        </ul>
                    </div>
                `
            },
            readMore: 'Read More',
        },
        skills: {
            title: 'Technical Skills',
            languages: 'Languages',
            frameworks: 'Frameworks & Libraries',
            tools: 'Tools & Platforms',
            databases: 'Databases',
        },
        contact: {
            title: 'Get In Touch',
            intro: "I'm not actively seeking new opportunities at this time, but feel free to connect.",
            email: 'apichan.ch@gmail.com',
        },
    },
    th: {
        nav: {
            projects: 'โปรเจกต์',
            skills: 'ทักษะ',
            contact: 'ติดต่อ',
        },
        landing: {
            greeting: 'สวัสดีครับ ผมชื่ออภิชาญ ชัยยุทธศาสตร์',
            intro: 'นักพัฒนาซอฟต์แวร์ที่เชี่ยวชาญในการสร้างเว็บแอปพลิเคชันประสิทธิภาพสูง',
            button: 'ดูผลงานของฉัน',
        },
        projects: {
            title: 'โปรเจกต์',
            project1: {
                title: 'ระบบซิงค์ข้อมูลนัดหมายโรงพยาบาลแบบ On-Demand Scoped Sync',
                summary: 'โปรเจกต์เพื่อเพิ่มประสิทธิภาพระบบนัดหมายของโรงพยาบาลโดยเปลี่ยนจากการประมวลผลข้อมูลจำนวนมากเป็นการซิงโครไนซ์ตามความต้องการของผู้ใช้',
                details: `
                    <h4 class="text-2xl font-bold mb-4">1. ความท้าทาย (วิวัฒนาการของปัญหา)</h4>
                    <p class="text-lg mb-2"><strong class="font-semibold">ปัญหาเริ่มต้น:</strong> ต้องการลดภาระเซิร์ฟเวอร์ของโรงพยาบาล จึงเลือกวิธีซิงค์ข้อมูลล่วงหน้า 6 เดือนมาเก็บไว้ (Batch Processing)</p>
                    <div class="pl-4 border-l-4 border-accent dark:border-accent-dark">
                        <p class="text-lg font-semibold mb-2 text-red-600 dark:text-red-400">Pain Points:</p>
                        <ul class="list-disc list-inside space-y-2">
                            <li><strong class="font-semibold">Integrity:</strong> ข้อมูลมีปริมาณมหาศาล (Bulk Data) ทำให้การดึงข้อมูลบางครั้งล้มเหลว หรือมาไม่ครบ</li>
                            <li><strong class="font-semibold">Stale Data:</strong> ข้อมูลไม่อัปเดตทันที (Not Real-time) ทำให้เกิด Conflict (เช่น หมอเห็นว่าว่าง แต่จริงๆ มีนัดแทรกเข้ามาแล้ว)</li>
                        </ul>
                    </div>
                    <div class="mt-8">
                        <h4 class="text-2xl font-bold mb-4">2. วิธีแก้ไข: "On-Demand Scoped Sync"</h4>
                        <p class="text-lg mb-2">เปลี่ยนจาก Scheduled Bulk Sync เป็น On-Demand Sync โดยใช้เทคนิค:</p>
                        <ul class="list-disc list-inside space-y-2 pl-4">
                            <li><strong class="font-semibold">Trigger by Action:</strong> ระบบจะเริ่ม Sync ก็ต่อเมื่อแพทย์กดเข้ามาดูตารางนัดหมายเท่านั้น</li>
                            <li><strong class="font-semibold">Scope Reduction:</strong> แทนที่จะดึง 6 เดือนรวดเดียว เปลี่ยนเป็นดึง "เฉพาะเดือนที่แพทย์กำลังดู" (Time-Window filtering)</li>
                        </ul>
                    </div>
                    <div class="mt-8">
                        <h4 class="text-2xl font-bold mb-4">3. สถาปัตยกรรมและเทคโนโลยี</h4>
                        <p class="text-lg mb-2"><strong class="font-semibold">Stack:</strong> React Native (Mobile), NestJS (API), Postgres (DB), AWS EKS & Aurora</p>
                        <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm">
                            <p class="font-bold mb-2">Flow:</p>
                            <ol class="list-decimal list-inside space-y-1">
                                <li>ผู้ใช้เปิดหน้าปฏิทินเดือน "มกราคม"</li>
                                <li>Backend รับ Request → ยิงไปถาม Legacy System ของโรงพยาบาลเฉพาะช่วงเวลา "มกราคม"</li>
                                <li>นำข้อมูลใหม่ Update ลง Postgres (Upsert) → Return กลับไปให้ผู้ใช้</li>
                            </ol>
                            <p class="font-bold mt-4 mb-2">Maintenance:</p>
                            <p>มีระบบ VACUUM และ Auto-delete ข้อมูลเก่า เพื่อป้องกัน Table Bloat ในระยะยาว</p>
                        </div>
                    </div>
                    <div class="mt-8">
                        <h4 class="text-2xl font-bold mb-4">4. ผลลัพธ์ที่สำคัญ</h4>
                        <ul class="list-disc list-inside space-y-2 pl-4">
                            <li><strong class="font-semibold">Data Accuracy:</strong> ลดปัญหา Data Conflict อย่างมีนัยสำคัญ ข้อมูลมีความสดใหม่ (Freshness) สูงขึ้น</li>
                            <li><strong class="font-semibold">Performance:</strong> ลด Load ของ Legacy Server ได้มหาศาล เพราะดึงข้อมูลทีละส่วนเล็กๆ (Small Chunk) และดึงเมื่อจำเป็นเท่านั้น</li>
                            <li><strong class="font-semibold">User Experience:</strong> แพทย์ได้รับข้อมูลที่ถูกต้อง โดยแลกกับ Latency ที่เพิ่มขึ้นเล็กน้อยตอนโหลดครั้งแรก (ซึ่งยอมรับได้เมื่อเทียบกับความถูกต้องของข้อมูล)</li>
                        </ul>
                    </div>
                `
            },
            readMore: 'อ่านเพิ่มเติม',
        },
        skills: {
            title: 'ทักษะทางเทคนิค',
            languages: 'ภาษา',
            frameworks: 'เฟรมเวิร์กและไลบรารี',
            tools: 'เครื่องมือและแพลตฟอร์ม',
            databases: 'ฐานข้อมูล',
        },
        contact: {
            title: 'ติดต่อ',
            intro: 'ตอนนี้ฉันยังไม่เปิดรับโอกาสใหม่ๆ แต่สามารถติดต่อมาได้เสมอ',
            email: 'apichan.ch@gmail.com',
        },
    },
};
