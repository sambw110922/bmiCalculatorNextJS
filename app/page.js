import Link from "next/link";

import "./mystyle.css";

export default function Home() {

  return (

    <main>
        <h2>Welcome to BMI calculator</h2>
        <p>Click <Link href={{ pathname:"/calculator" }}>here</Link> to start.</p>
    </main>

  )
}
