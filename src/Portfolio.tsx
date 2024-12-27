import React, { useState, useEffect } from 'react';
import { Mail, Music, Github, Linkedin, Twitter, AudioLines, Library, X } from 'lucide-react';
import floweryLogo from './assets/flowery.svg';
import tessaImage from './assets/tessa.png';

interface TrackImage {
  '#text': string;
  size: string;
}

interface Artist {
  '#text': string;
  mbid?: string;
}

interface Album {
  '#text': string;
  mbid?: string;
}

interface Track {
  name: string;
  artist: Artist;
  album: Album;
  image: TrackImage[];
}

const Portfolio: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Ryan5453&api_key=f3878d8bcb04561fe918bb6f22ba808f&format=json`
        );
        const data = await response.json();
        setCurrentTrack(data.recenttracks.track[0]);
      } catch (error) {
        console.error('Error fetching track:', error);
      }
    };

    fetchTrack();
    const interval = setInterval(fetchTrack, 120000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = tessaImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative container max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="relative bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl p-8 border border-orange-100">
          <div className="flex justify-between items-center">
            <h1 
              className="text-4xl font-bold text-orange-950 relative cursor-pointer"
              onClick={() => setShowPopup(true)}
            >
              Ryan Fahey
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-rose-400 rounded-full" />
            </h1>
            <div className="flex space-x-4">
              <a href="https://github.com/Ryan5453" className="text-orange-700 hover:text-orange-950 transition-colors transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://twitter.com/Ryan5453" className="text-orange-700 hover:text-orange-950 transition-colors transform hover:scale-110">
                <Twitter size={24} />
              </a>
              <a href="https://linkedin.com/in/Ryan5453" className="text-orange-700 hover:text-orange-950 transition-colors transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="mailto:ryan@ryan.science" className="text-orange-700 hover:text-orange-950 transition-colors transform hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="space-y-4">
              <p className="text-lg text-orange-900 leading-relaxed">
                hey there! i'm ryan, a software engineer from massachusetts. i'm a northeastern university student currently on co-op, working as a computational modeling engineer at montai therapeutics while pursuing my b.s. in computer science.
              </p>
              <p className="text-lg text-orange-900 leading-relaxed">
                i'm passionate about building robust scalable infrastructure and exploring the fascinating field of machine learning, especially in areas like speech synthesis, automatic speech recognition, and large language models. i find the intersection of these interests particularly fascinating.
              </p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-orange-950 mb-6 relative inline-block">
            Projects
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-rose-400 rounded-full" />
          </h2>
          
          <div className="space-y-6">
            <div className="group bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl p-6 border border-orange-100 hover:border-orange-200 transition-all duration-300">
              <a href="https://flowery.pw" className="block">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <img src={floweryLogo} alt="Flowery Logo" className="w-6 h-6" />
                    <h3 className="text-xl font-bold text-orange-950 group-hover:text-orange-700 transition-colors">Flowery</h3>
                  </div>
                  <span className="text-sm text-orange-600 bg-orange-100 px-3 py-1 rounded-full">Featured</span>
                </div>
                <p className="mt-3 text-orange-800 leading-relaxed">
                  A free text-to-speech service that simplifies converting text to speech. Flowery connects you with multiple TTS providers, allowing you to access a variety of voices and engines from one convenient platform. With a clean web interface and developer-friendly API, it's built with a focus on simplicity and ease of use.
                </p>
              </a>
            </div>

            <div className="group bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl p-6 border border-orange-100 hover:border-orange-200 transition-all duration-300">
              <a href="https://github.com/Ryan5453/SingingWhisper" className="block">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <AudioLines size={24} className="text-orange-700" />
                    <h3 className="text-xl font-bold text-orange-950 group-hover:text-orange-700 transition-colors">SingingWhisper</h3>
                  </div>
                  <span className="text-sm text-orange-600 bg-orange-100 px-3 py-1 rounded-full">Research</span>
                </div>
                <p className="mt-3 text-orange-800 leading-relaxed">
                  An ambitious research project exploring advanced techniques in music transcription. Combining state-of-the-art audio processing, machine learning models, and novel optimization approaches to transform how we convert music into text.
                </p>
              </a>
            </div>


            <div className="group bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl p-6 border border-orange-100 hover:border-orange-200 transition-all duration-300">
              <a href="https://songdata.org" className="block">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <Library size={24} className="text-orange-700" />
                    <h3 className="text-xl font-bold text-orange-950 group-hover:text-orange-700 transition-colors">SongData</h3>
                  </div>
                  <span className="text-sm text-orange-600 bg-orange-100 px-3 py-1 rounded-full">Upcoming</span>
                </div>
                <p className="mt-3 text-orange-800 leading-relaxed">
                  A unified music catalogue that seamlessly integrates with major music streaming platforms. Search for songs, albums, or artists and get direct links to enjoy them on your preferred service. Powered by cutting-edge technology derived from SingingWhisper, SongData offers an unparalleled music discovery experience. SongData will feature an intuitive web interface and a robust API for developers upon its release.
                </p>
              </a>
            </div>


          </div>
        </div>

        {/* Now Playing Section */}
        <div className="mt-12">
          <div className="bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl p-6 border border-orange-100">
            <h2 className="text-xl font-bold text-orange-950 flex items-center">
              <Music className="mr-2" /> 
              <span className="relative">
                Now Playing
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-rose-400 rounded-full" />
              </span>
            </h2>
            {currentTrack && (
              <a href="https://last.fm/user/Ryan5453" className="block">
                <div className="flex mt-4">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-300 to-rose-300 blur-xl opacity-90 rounded-xl scale-100" />
                    <img 
                      src={currentTrack.image[3]['#text'] || "/api/placeholder/128/128"}
                      alt="Album Art"
                      className="w-24 h-24 rounded-xl object-cover relative hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="ml-4 flex flex-col justify-center min-w-0">
                    <div className="font-medium text-orange-950 truncate">{currentTrack.name}</div>
                    <div className="text-orange-800 mt-1 truncate">{currentTrack.artist['#text']}</div>
                    <div className="text-orange-700 mt-1 truncate">{currentTrack.album['#text']}</div>
                  </div>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && imageLoaded && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4"
          onClick={() => setShowPopup(false)}
        >
          <div 
            className="relative w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 p-2 bg-orange-100 hover:bg-orange-200 text-orange-700 hover:text-orange-950 rounded-full transition-colors z-10"
              onClick={() => setShowPopup(false)}
            >
              <X size={20} />
            </button>
            <img 
              src={tessaImage}
              alt="Tessa"
              className="w-full h-auto"
            />
            <div className="p-4 bg-white">
              <p className="text-center text-orange-900 text-lg">Meet Tessa, my adorable dog!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;