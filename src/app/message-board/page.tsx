'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Message } from '@/types';
import { useScrollBackground } from '@/hooks/useScrollBackground';

const MessageBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState({
    title: '',
    subtitle: '',
    content: ''
  });
  const [messages, setMessages] = useState<Message[]>([]);
  const { currentImage } = useScrollBackground();

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages');
      const data = await response.json();

      if (response.ok && data.status === 'success') {
        setMessages(data.messages);
      } else {
        setError('Failed to load messages');
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Failed to load messages');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMessage),
      });

      const data = await response.json();

      if (response.ok && data.status === 'Approved') {
        setMessages([...messages, data.data]);
        setNewMessage({ title: '', subtitle: '', content: '' });
        setIsModalOpen(false);
      } else {
        if (data.message === 'Message contains inappropriate content') {
          alert(data.details);
        } else {
          setError(data.message || 'Failed to add message');
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Failed to submit message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <div className="relative min-h-screen pt-20 p-6">
        {/* Dynamic Background */}
        <div 
          className="fixed inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out -z-10"
          style={{ 
            backgroundImage: `url('${currentImage}')`,
          }}
        />
        {/* Background Overlay */}
        <div className="fixed inset-0 bg-black/20 -z-10" />
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link
              href="/"
              className="flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full shadow hover:bg-white/80 transition-colors text-lg"
          >
            <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Home
          </Link>
          <Link
              href="../calendar"
              className="flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full shadow hover:bg-white/80 transition-colors text-lg"
          >
            Next: Our Timeline
            <svg
                className="w-5 h-5 ml-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>

        {/* Instructions Banner */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg border border-white/30">
          <div className="flex items-start gap-4">
            <div className="bg-red-100 rounded-full p-2 mt-1">
              <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2 text-gray-800">Share Your NUS High Memories!</h2>
              <p className="text-gray-700 mb-4">
                Help us celebrate 20 years of excellence by sharing your experiences, memories, or congratulations.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">💡 What to include:</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Your connection to NUS High (Alumni, Parent, etc.)</li>
                    <li>• Memorable experiences or achievements</li>
                    <li>• Well wishes for the future</li>
                    <li>• Impact the school had on your journey</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">✨ How to add your message:</h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span>1. Click the</span>
                    <div className="bg-red-500 text-white rounded-full p-1">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                    <span>button in the bottom-right corner</span>
                  </div>
                  <p className="text-gray-600 mt-1">2. Fill in your details and heartfelt message</p>
                  <p className="text-gray-600">3. Submit for review and approval</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Board */}
        {isLoading ? (
            <div className="flex justify-center items-center min-h-screen">
              <div className="text-xl">Loading messages...</div>
            </div>
        ) : (
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {messages.map((message) => (
                  <article
                      key={message.id}
                      className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all"
                  >
                    <h2 className="text-2xl font-bold mb-2">{message.title}</h2>
                    <h3 className="text-lg text-gray-700 mb-4">{message.subtitle}</h3>
                    <p className="text-lg leading-relaxed text-gray-700 max-h-48 overflow-y-auto pr-2">{message.content}</p>
                  </article>
              ))}
            </div>
        )}

        {/* Add Message Button */}
        <div className="fixed bottom-8 right-8 flex flex-col items-end gap-2">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <p className="text-sm font-medium text-gray-800 whitespace-nowrap">Add Your Message</p>
          </div>
          <button
              onClick={() => setIsModalOpen(true)}
              className="group bg-red-500 text-white rounded-full p-6 shadow-xl hover:bg-red-600 hover:scale-110 transition-all duration-300"
              aria-label="Add message"
          >
            <svg
                className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl p-8 w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6">Add Your Message</h2>

                {error && error !== 'Message contains inappropriate content' && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                      {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                      Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={newMessage.title}
                        onChange={(e) => setNewMessage({ ...newMessage, title: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        required
                        disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-1">
                      Subtitle (e.g., ALUMNI, CLASS OF 2021)
                    </label>
                    <input
                        type="text"
                        id="subtitle"
                        value={newMessage.subtitle}
                        onChange={(e) => setNewMessage({ ...newMessage, subtitle: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        required
                        disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                        id="content"
                        value={newMessage.content}
                        onChange={(e) => setNewMessage({ ...newMessage, content: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent h-32"
                        required
                        disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                        disabled={isSubmitting}
                    >
                      Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Adding...' : 'Add Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
        )}
      </div>
  );
};

export default MessageBoard;