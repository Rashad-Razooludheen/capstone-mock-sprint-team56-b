import type { Metadata } from 'next'
import { getServerSession } from '@/actions/auth.actions'
import { adminDb } from '@/lib/firebase/admin'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default async function DashboardPage() {
  const session = await getServerSession()
  const profileSnap = session ? await adminDb.collection('users').doc(session.uid).get() : null

  const displayName = profileSnap?.exists
    ? (profileSnap.data()?.displayName as string | null)
    : null
  const greetingName = displayName ?? session?.email ?? null
  await requireAuth()
  return (
    <div className="space-y-6">
      <div style="font-family: Arial, sans-serif; background-color: #f3f3f3; margin: 0; padding: 20px;">

      <div style="max-width: 900px; margin: 0 auto;">
        <h1 style="text-align: center; margin-bottom: 5px;">Team 56B</h1>
        <h2 style="text-align: center; margin-top: 0; color: #555;">Meet the team!</h2>

        <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; margin-top: 30px;">
          <div style="background-color: #d9f2d9; padding: 15px 20px; border-radius: 8px; display: flex; gap: 15px;">
            <img src="rashad_razooludheen.jpg" alt="Rashad Razooludheen"
                style="width: 80px; height: 80px; object-fit: cover; border-radius: 6px;">
            <div>
              <h3 style="margin: 0 0 5px;">Rashad Razooludheen</h3>
              <p style="margin: 0 0 8px; font-weight: bold;">Project Manager</p>
              <p style="margin: 0; color: #555;text-align:justify;">Placeholder Info</p>
            </div>
          </div>
          <div style="background-color: #d9f2d9; padding: 15px 20px; border-radius: 8px; display: flex; gap: 15px;">
            <img src="minji_kim.jpg" alt="Minji Kim"
                style="width: 80px; height: 80px; object-fit: cover; border-radius: 6px;">
            <div>
              <h3 style="margin: 0 0 5px;">Minji Kim</h3>
              <p style="margin: 0 0 8px; font-weight: bold;">Business Analyst</p>
              <p style="margin: 0; color: #555;text-align:justify;">Placeholder Info</p>
            </div>
          </div>
          <div style="background-color: #d9f2d9; padding: 15px 20px; border-radius: 8px; display: flex; gap: 15px;">
            <img src="satyam_sharma.jpg" alt="Satyam Sharma"
                style="width: 80px; height: 80px; object-fit: cover; border-radius: 6px;">
            <div>
              <h3 style="margin: 0 0 5px;">Satyam Sharma</h3>
              <p style="margin: 0 0 8px; font-weight: bold;">UX and Developer</p>
              <p style="margin: 0; color: #555;text-align:justify;">I'm a final-semester Bachelor of IT student with a strong interest in data science, algorithms and software development. I enjoy problem-solving and learning how different technologies work. Outside of IT, I enjoy going to the gym and trying out new recipes at home.</p>
            </div>
          </div>
          <div style="background-color: #d9f2d9; padding: 15px 20px; border-radius: 8px; display: flex; gap: 15px;">
            <img src="kaelan_grainger.jpg" alt="Kaelan Grainger"
                style="width: 80px; height: 80px; object-fit: cover; border-radius: 6px;">
            <div>
              <h3 style="margin: 0 0 5px;">Kaelan Grainger</h3>
              <p style="margin: 0 0 8px; font-weight: bold;">UX and Developer</p>
              <p style="margin: 0; color: #555;text-align:justify;">I'm Kaelan and I am in my final semester (5th year) of Bachelor of Computer & Network Eng / Computer Science. I specialise in low level and embedded development (such as C, Assembly code etc) as well as network communications / database operations. I also have a lot of experience developing backend code in python.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
    </div>
  )
}
