import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-center justify-center mx-4">
      <h2 className="text-3xl mb-10 font-bold">Honeybee.it has closed down</h2>
      <p>For the past 15 years I have been running Honeybee.it.</p>
      <p>Now it&apos;s time to say goodbye and go do something else.</p>
      <div className="mt-10">
        <p className="font-bold">If you are still in need of data you can try out one of the providers below:</p>
        <ul>
          <li><a href="https://www.schedulesdirect.org/" className="underline" target="_blank">Schedules Direct</a> - Private users</li>
          <li><a href="https://tvprofil.net/xmltv/" className="underline" target="_blank">TV Profil</a> - Private users</li>
          <li><a href="https://tvprofil.com/epg/" className="underline" target="_blank">TV Profil</a> - Commercial users</li>
          <li><a href="https://www.universum.no/" className="underline" target="_blank">Universum</a> - Commercial users</li>
        </ul>
      </div>
    </main>
  )
}
