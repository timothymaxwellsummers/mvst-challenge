import { useState } from 'react';
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();
  const [gitHubId, setGitHubId] = useState('');

  const handleGitHubIdChange = (e: any) => {
    setGitHubId(e.target.value);
  };

  const handleRepositoriesPageNavigation = () => {
    // Use Next.js router to navigate to the reositories page with dynamic route
    router.push(`/repositories/${gitHubId}`);
  };

  return (
    <>
      <div>
      <h1>GitHub User Info App</h1>
      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={gitHubId}
        onChange={handleGitHubIdChange}
      />
      <button onClick={handleRepositoriesPageNavigation}>View Info</button>
    </div>
    </>
  )
}
