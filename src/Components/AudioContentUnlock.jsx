import React from 'react';

const AudioContentUnlock = () => {
  const features = [
    {
      image:'/logo1.svg',
      bg: '/bg1.svg',
      title: 'Transcription',
      description: 'Easily convert audio files into accurate text with multi-language support.',
      linkText: 'Try Transcription',
    },
    {
      image:'/logo2.svg',
      bg: '/bg2.svg',
      title: 'Summarisation',
      description: 'Generate detailed or customised summaries of your content.',
      linkText: 'Try Summarisation',
    },
    {
      image:'/logo3.svg',
      bg: '/bg3.svg',
      title: 'Transcript Viewer',
      description: 'Highlight and save key sections with collapsible navigation.',
      linkText: 'Try Transcript Viewer',
    },
    {
      image:'/logo4.svg',
      bg: '/bg4.svg',
      title: 'Knowledge Base',
      description: 'Organize, tag, and search your saved transcripts and summaries.',
      linkText: 'Try Knowledge Base',
    },
    {
      image:'/logo5.svg',
      bg: '/bg5.svg',
      title: 'Chatbot Assistant',
      description: 'Get answers to your questions based on the transcript content.',
      linkText: 'Try Chatbot Assistant',
    },
    {
      image:'/logo6.svg',
      bg: '/bg6.svg',
      title: 'Content Management',
      description: 'Efficiently organise your audio content with folders and tags.',
      linkText: 'Try Content Management',
    },
  ];

  return (
    <div className="bg-gray-900 text-white p-32 max-[1000px]:p-4 text-center flex flex-col items-center gap-14">
<div className='w-[33%] max-[1000px]:w-[80%]'>
<h1 className="text-4xl font-bold mb-5 ">Unlock the Power of Audio Content</h1>
<p className="">Transform the way you interact with and extract knowledge from podcasts and audio files.</p>
</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center text-center gap-4"
          >
            <div className='bg-cover bg-center h-10 w-10 flex items-center justify-center'
            style={{
              backgroundImage: `url('${feature.bg}')`,
            }}>
              <img src={feature.image} alt="logo" />
            </div>
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="mb-4 w-[60%]">{feature.description}</p>
            <a
              href="#"
              className="text-blue-400 hover:underline flex gap-4"
            >
              {feature.linkText} <img src="/arrowIcon.svg" alt=">" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioContentUnlock;
