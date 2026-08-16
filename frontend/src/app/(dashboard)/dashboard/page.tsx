import type { Metadata } from 'next'
import { requireAuth } from '@/actions/auth.actions'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default async function DashboardPage() {
  await requireAuth()

  return (
    <div className="space-y-6">
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#f3f3f3',
          margin: 0,
          padding: '20px',
        }}
      >
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          <h1
            style={{
              textAlign: 'center',
              marginBottom: '5px',
              color: "black",
              fontWeight: 'bold',
            }}
          >
            Team 56B
          </h1>

          <h2
            style={{
              textAlign: 'center',
              marginTop: 0,
              color: "black",
              fontWeight: 'bold',  }}
          >
            Meet the team!
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '20px',
              marginTop: '30px',
            }}
          >
            {/* Rashad */}
            <div
              style={{
                backgroundColor: '#d9f2d9',
                padding: '15px 20px',
                borderRadius: '8px',
                display: 'flex',
                gap: '15px',
              }}
            >
              <img
                src="/rashad_razooludheen.jpg"
                alt="Rashad Razooludheen"
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  borderRadius: '6px',
                }}
              />

              <div>
                <h3 style={{ margin: '0 0 5px'
                  ,
                  color: "black",
                  fontWeight: 'bold',
                }}>
                  Rashad Razooludheen
                </h3>

                <p
                  style={{
                    margin: '0 0 8px',
                    color: "black",
                    fontWeight: 'bold',
                  }}
                >
                  Project Manager
                </p>

                <p
                  style={{
                    margin: 0,
                    color: "black",
                    textAlign: 'justify',
                  }}
                >
                  I&apos;m Rashad, a third-year Computer Science student at
                  RMIT University with a strong interest in Artificial
                  Intelligence and Machine Learning.
                </p>
              </div>
            </div>

            {/* Minji */}
            <div
              style={{
                backgroundColor: '#d9f2d9',
                padding: '15px 20px',
                borderRadius: '8px',
                display: 'flex',
                gap: '15px',
              }}
            >
              <img
                src="/minji_kim.png"
                alt="Minji Kim"
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  borderRadius: '6px',
                }}
              />

              <div>
                <h3 style={{ margin: '0 0 5px'
                  ,
                  color: "black",
                  fontWeight: 'bold',
                }}>Minji Kim</h3>

                <p
                  style={{
                    margin: '0 0 8px',
                    color: "black",
                    fontWeight: 'bold',
                  }}
                >
                  Business Analyst
                </p>

                <p
                  style={{
                    margin: 0,
                    textAlign: 'justify',
                    color: "black",

                  }}
                >
                  I am currently in my final semester of Bachelor of IT, with
                  internship experience in technology consulting. Through my
                  studies and work experience, I have recently gained an
                  interest in data and business analytics.
                </p>
              </div>
            </div>

            {/* Satyam */}
            <div
              style={{
                backgroundColor: '#d9f2d9',
                padding: '15px 20px',
                borderRadius: '8px',
                display: 'flex',
                gap: '15px',
              }}
            >
              <img
                src="/satyam_sharma.jpg"
                alt="Satyam Sharma"
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  borderRadius: '6px',
                }}
              />

              <div>
                <h3 style={{ margin: '0 0 5px',
                  color: "black",
                  fontWeight: 'bold',
                 }}>Satyam Sharma</h3>

                <p
                  style={{
                    margin: '0 0 8px',
                     color: "black",
                    fontWeight: 'bold',
                  }}
                >
                  UX and Developer
                </p>

                <p
                  style={{
                    margin: 0,
                    color: "black",
                    textAlign: 'justify',
                  }}
                >
                  I&apos;m a final-semester Bachelor of IT student with a
                  strong interest in data science, algorithms and software
                  development. I enjoy problem-solving and learning how
                  different technologies work. Outside of IT, I enjoy going
                  to the gym and trying out new recipes at home.
                </p>
              </div>
            </div>

            {/* Kaelan */}
            <div
              style={{
                backgroundColor: '#d9f2d9',
                padding: '15px 20px',
                borderRadius: '8px',
                display: 'flex',
                gap: '15px',
              }}
            >
              <img
                src="/kaelan_grainger.jpg"
                alt="Kaelan Grainger"
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  borderRadius: '6px',
                }}
              />

              <div>
                <h3 style={{
                  margin: '0 0 5px',
                  color: "black",
                  fontWeight: 'bold',

                 }}>Kaelan Grainger</h3>

                <p
                  style={{
                    margin: '0 0 8px',
                    color: "black",
                    fontWeight: 'bold',
                  }}
                >
                  UX and Developer
                </p>

                <p
                  style={{
                    margin: 0,
                    color: "black",
                    textAlign: 'justify',
                  }}
                >
                  I&apos;m Kaelan and I am in my final semester (5th year) of
                  Bachelor of Computer &amp; Network Engineering / Computer
                  Science. I specialise in low-level and embedded development,
                  such as C and Assembly, as well as network communications
                  and database operations. I also have experience developing
                  backend code in Python.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}