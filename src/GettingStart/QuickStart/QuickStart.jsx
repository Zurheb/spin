import React from 'react'

export const QuickStart = () => {
  return (
    <section className="bg-gray-100 py-8">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 shadow-lg rounded-lg p-10">
          <h1 className="text-3xl font-semibold mb-4">Quick Start</h1>
          <p className="text-gray-700">
            Looking to start your project quickly? Just unzip the{' '}
            <span className="font-medium text-red-600 cursor-pointer">Spin-v1.0.0.zip.</span> We have precompiled and packaged everything in the{' '}
            <span className="font-medium text-red-600 cursor-pointer">pages</span> directory for you. Start editing the{' '}
            <span className="font-medium text-red-600 cursor-pointer">pages/page-starter.html</span> with a text or code editor, save it, and open
            the file in your favorite browser to see the changes.
          </p>
        </div>
        <div className='shadow-lg rounded-lg p-10'>
          <h1 className="text-3xl font-semibold mb-4">Setting up Build system</h1>
          <p className="text-gray-700">
            Unzip the <span className="font-medium text-red-600">Spin-v1.0.0.zip</span> to any folder and open a command line or
            terminal at that location. Theme's dev tools require{' '}
            <span className="text-blue-500 cursor-pointer border-blue-900 hover:text-blue-900 hover:border-b">Node</span> and{' '}
            <span className="text-blue-600 cursor-pointer border-blue-900 hover:text-blue-900 hover:border-b">Git</span>. If you do not have them on your machine, please install their
            latest stable version from their corresponding website. As you have{' '}
            <span className="font-bold">Node and Git installed and accessible from your terminal or command line,</span>{' '}
            install <span className="text-blue-600 border-blue-900 hover:text-blue-900 hover:border-b">Gulp CLI</span> package globally with the following command:
          </p>
          <div className="bg-blue-gray-900 rounded-md p-4 mb-4">
            <p className="text-gray-300">npm i gulp-cli -g</p>
          </div>
          <h1 className="text-3xl font-semibold mb-4">When you’re done, install the rest of the theme’s dependencies with:</h1>
          <div className="bg-blue-gray-900 rounded-md p-4 mb-4">
            <p className="text-gray-300">npm i</p>
          </div>
          <h1 className="text-3xl font-semibold mb-4">Now run:</h1>
          <div className="bg-blue-gray-900 rounded-md p-4 mb-4">
            <p className="text-gray-300">gulp</p>
          </div>
          <p className="text-gray-700">
            Running gulp will compile the SCSS, transpile the JavaScript, copy all required libraries from{' '}
            <span className="text-red-600">node_modules</span> to the corresponding{' '}
            <span className="text-red-600">pages/assets/</span> directory and will open a browser window to{' '}
            <span className="text-red-600">pages/index.html</span>
          </p>
          <p className="text-gray-700">
            All of the following folders are monitored for changes, which will tell the browser to reload automatically
            after any changes are made:
          </p>
          <div className="bg-blue-gray-900 rounded-md p-4 mb-4">
            <p className="text-gray-300">pages/*.html</p>
            <p className="text-gray-300">pages/assets/fonts/</p>
            <p className="text-gray-300">pages/assets/video/</p>
            <p className="text-gray-300">pages/assets/img/</p>
            <p className="text-gray-300">scss/</p>
            <p className="text-gray-300">js/</p>
          </div>
          <p className="text-gray-700">
            Now you can edit any HTML file from <span className="text-red-600">pages</span>, change SCSS variables with{' '}
            <span className="text-red-600">_user-variables.scss,</span> or write your own SCSS code in{' '}
            <span className="text-red-600">scss/_user.scss</span>
          </p>
          <div className="bg-yellow-300 rounded-md p-4 mb-4">
            <p>
              Running the <span className="text-red-600">gulp</span> command will discard and regenerate all the
              files in the following directories:
            </p>
            <div className="bg-blue-gray-900 rounded-md p-4 mt-2">
              <p className="text-gray-300">js/bootstrap/</p>
              <p className="text-gray-300">scss/bootstrap/</p>
              <p className="text-gray-300">pages/assets/css/</p>
              <p className="text-gray-300">pages/assets/js/</p>
              <p className="text-gray-300">pages/assets/lib/</p>
            </div>
          </div>
          <p className="text-gray-700">Hit <span className="text-red-600">Ctrl+C</span> or just close the command line window to stop the server.</p>
          <p className="text-gray-700">Happy editing!</p>
        </div>
      </div>
    </div>
  </section>
  )
}
