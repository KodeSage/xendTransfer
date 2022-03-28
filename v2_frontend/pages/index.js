import Head from 'next/head'
import { Navbar, Welcome, Footer, Service} from "../components";


export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <div className="gradient-bg-services">
        <Service />
        <Footer />
      </div>
    </div>
  )
}
