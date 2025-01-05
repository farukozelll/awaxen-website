// app/data/posts.ts
import { Post } from '@/app/types';

export const POSTS: Post[] = [
    {
        id: '1',
        title: 'The Future of Sustainable Energy in Agriculture',
        subtitle: 'How smart technologies are revolutionizing farming practices',
        content: `
      <div class="prose prose-lg dark:prose-invert">
        <p>The agricultural industry is experiencing a significant transformation through sustainable energy solutions. With the integration of smart technologies and renewable energy sources, modern farming practices are becoming more efficient and environmentally friendly.</p>
        
        <h2>Smart Farming Revolution</h2>
        <p>Smart farming technologies, powered by sustainable energy, are changing how we approach agriculture. These innovations include:</p>
        <ul>
          <li>Automated irrigation systems</li>
          <li>Solar-powered sensors</li>
          <li>Energy-efficient greenhouse solutions</li>
        </ul>

        <h2>Impact on Productivity</h2>
        <p>The implementation of these technologies has shown remarkable results in both energy conservation and crop yield improvement.</p>
      </div>
    `,
        coverImage: '/images/blog/agribot.jpg',
        author: {
            name: 'Dr. Sarah Johnson',
            avatar: '/images/avatar.svg',
            role: 'Head of Innovation'
        },
        publishDate: '2024-01-05',
        readTime: 8,
        category: 'Technology',
        tags: ['Sustainability', 'Innovation', 'AgTech'],
        source: 'internal',
        views: 1520
    },
    {
        id: '2',
        title: 'AI-Powered Agricultural Solutions',
        subtitle: 'Transforming farming with artificial intelligence',
        content: `
      <div class="prose prose-lg dark:prose-invert">
        <p>Artificial Intelligence is revolutionizing the agricultural sector...</p>
        <!-- Benzer içerik yapısı -->
      </div>
    `,
        coverImage: '/images/blog/agribot.jpg',
        author: {
            name: 'Michael Chen',
            avatar: '/images/avatar.svg',
            role: 'AI Research Lead'
        },
        publishDate: '2024-01-03',
        readTime: 6,
        category: 'Innovation',
        tags: ['AI', 'Technology', 'Future'],
        source: 'internal',
        views: 980
    },
    {
        id: '3',
        title: 'The Role of IoT in Sustainable Agriculture',
        subtitle: 'How the Internet of Things is shaping the future of farming',
        content: `
        <div class="prose prose-lg dark:prose-invert">
            <p>The Internet of Things (IoT) is playing a crucial role in the development of sustainable agriculture...</p>
            <!-- Benzer içerik yapısı -->
        </div>
        `,
        coverImage: '/images/blog/agribot.jpg',
        author: {
            name: 'Michael Chen',
            avatar: '/images/avatar.svg',
            role: 'AI Research Lead'
        },
        publishDate: '2024-01-03',
        readTime: 6,
        category: 'Innovation',
        tags: ['AI', 'Technology', 'Future'],
        source: 'internal',
        views: 980
    },
    {
        id: '4',
        title: 'The Future of Sustainable Energy in Agriculture',
        subtitle: 'How smart technologies are revolutionizing farming practices',
        content: `
            <div class="prose prose-lg dark:prose-invert">
                <p>The agricultural industry is experiencing a significant transformation through sustainable energy solutions. With the integration of smart technologies and renewable energy sources, modern farming practices are becoming more efficient and environmentally friendly.</p>
                
                <h2>Smart Farming Revolution</h2>
                <p>Smart farming technologies, powered by sustainable energy, are changing how we approach agriculture. These innovations include:</p>
                <ul>
                    <li>Automated irrigation systems</li>
                    <li>Solar-powered sensors</li>
                    <li>Energy-efficient greenhouse solutions</li>
                </ul>
        
                <h2>Impact on Productivity</h2>
                <p>The implementation of these technologies has shown remarkable results in both energy conservation and crop yield improvement.</p>
            </div>
            `,
        coverImage: '/images/blog/agribot.jpg',
        author: {
            name: 'Michael Chen',
            avatar: '/images/avatar.svg',
            role: 'AI Research Lead'
        },
        publishDate: '2024-01-03',
        readTime: 6,
        category: 'Innovation',
        tags: ['AI', 'Technology', 'Future'],
        source: 'internal',
        views: 980
    },
    {
        id: '5',
        title: 'The Role of IoT in Sustainable Agriculture',
        subtitle: 'How the Internet of Things is shaping the future of farming',
        content: `
                <div class="prose prose-lg dark:prose-invert">
                    <p>The Internet of Things (IoT) is playing a crucial role in the development of sustainable agriculture...</p>
                    <!-- Benzer içerik yapısı -->
                </div>
                `,
        coverImage: '/images/blog/agribot.jpg',
        author: {
            name: 'Michael Chen',
            avatar: '/images/avatar.svg',
            role: 'AI Research Lead'
        },
        publishDate: '2024-01-03',
        readTime: 6,
        category: 'Innovation',
        tags: ['AI', 'Technology', 'Future'],
        source: 'internal',
        views: 980
    },
];