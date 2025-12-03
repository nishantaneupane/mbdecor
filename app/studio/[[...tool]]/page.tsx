export default function StudioPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-2xl p-8">
        <h1 className="text-4xl font-bold mb-4">Sanity Studio</h1>
        <p className="text-gray-600 mb-6">
          To access Sanity Studio, you need to:
        </p>
        <ol className="text-left space-y-3 mb-8">
          <li className="flex gap-3">
            <span className="font-bold">1.</span>
            <span>Create a Sanity project at <a href="https://www.sanity.io" className="text-primary underline" target="_blank" rel="noopener noreferrer">sanity.io</a></span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold">2.</span>
            <span>Update your <code className="bg-gray-200 px-2 py-1 rounded">.env.local</code> with your Sanity credentials</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold">3.</span>
            <span>Set <code className="bg-gray-200 px-2 py-1 rounded">DATA_SOURCE=sanity</code> in your environment</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold">4.</span>
            <span>Run <code className="bg-gray-200 px-2 py-1 rounded">npx sanity dev</code> in a separate terminal to start the studio</span>
          </li>
        </ol>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>Currently using:</strong> JSON data source<br />
            Check <code>SANITY_SETUP.md</code> for complete setup instructions.
          </p>
        </div>
      </div>
    </div>
  )
}
