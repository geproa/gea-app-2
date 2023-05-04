import Link from "next/link";
// import  UsaGlobalForm from '../components/formUsa/UsaGlobaForm.jsx'
import Usa from '../components/formUsa/Usa'


export default function Home() {
  return (
   <div>
    <h3>Links to:</h3>
    <Link href='/applyUsa'>USA Form</Link>
    <Link href='/'>Canada Form</Link>
    <Link href='/'>Mexico Form</Link>
    {/* <UsaGlobalForm /> */}
    <Usa />
   </div>
  )
}
