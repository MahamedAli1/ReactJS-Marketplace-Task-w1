import React, { useState } from 'react';
import AdvertisementCard from './AdvertisementCard';
import SearchBar from './SearchBar';

const AdvertisementList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const advertisements = [
    { id: 1, title: 'Ad 1', description: 'This is the first advertisement.', contact: '***' },
    { id: 2, title: 'Ad 2', description: 'This is the second advertisement.', contact: '***' },
    { id: 3, title: 'Ad 3', description: 'This is the third advertisement.', contact: '***' },
    { id: 4, title: 'Ad 4', description: 'This is the fourth advertisement.', contact: '***' },
    { id: 5, title: 'Ad 5', description: 'This is the fifth advertisement.', contact: '***' },
    { id: 6, title: 'Ad 6', description: 'This is the sixth advertisement.', contact: '***' },
  ];

  const filteredAds = advertisements.filter((ad) =>
    ad.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ad-list">
      <h1>Advertisement List</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="ad-grid">
        {filteredAds.map((ad) => (
          <AdvertisementCard
            key={ad.id}
            title={ad.title}
            description={ad.description}
            contact={ad.contact}
          />
        ))}
      </div>
    </div>
  );
};

export default AdvertisementList;
