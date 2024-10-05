import React, { useState, useEffect } from 'react';

const PlaceSearchAutocomplete = ({ onPlaceSelect }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);

    const handleInputChange = async (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length > 2) {
            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(value)}`);
                const data = await response.json();
                setSuggestions(data.slice(0, 9)); // Limit to 9 suggestions
            } catch (error) {
                console.error('Error fetching suggestions:', error);
            }
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (place) => {
        setSelectedPlace(place);
        // console.log(place)
        setQuery(place.display_name);
        setSuggestions([]);
        onPlaceSelect('place', place.name); // Call the callback with the name and place
    };

    // useEffect(() => {
    //     if (selectedPlace) {
    //         console.log('Place Name:', selectedPlace.display_name);
    //         console.log('Place ID:', selectedPlace.place_id);
    //     }
    // }, [selectedPlace]);

    return (
        <div className="relative">
            <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search for a place..."
            />
            {suggestions.length > 0 && (
                <ul className="mt-2 bg-white border rounded-md shadow-lg">
                    {suggestions.map((place) => (
                        <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            key={place.place_id}
                            onClick={() => handleSuggestionClick(place)}
                        >
                            {place.display_name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

function GoogleAutoComplete({ onPlaceSelect }) {
    return (
        <>
            <PlaceSearchAutocomplete onPlaceSelect={onPlaceSelect} />
        </>
    );
}

export default GoogleAutoComplete;
