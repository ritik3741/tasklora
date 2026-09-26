"use client";

import React, { useState } from "react";
import { CodeBlock } from "@/components/tools/CodeBlock";

export function TwitterCardClient() {
  const [cardType, setCardType] = useState("summary_large_image");
  const [title, setTitle] = useState("Awesome Article Title");
  const [description, setDescription] = useState("This is a highly engaging description for my awesome article that will make people want to click and read more.");
  const [imageUrl, setImageUrl] = useState("https://example.com/image.jpg");
  const [siteHandle, setSiteHandle] = useState("@YourBrand");
  const [creatorHandle, setCreatorHandle] = useState("@AuthorName");

  const generateCode = () => {
    return `<meta name="twitter:card" content="${cardType}">
<meta name="twitter:site" content="${siteHandle}">
<meta name="twitter:creator" content="${creatorHandle}">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${imageUrl}">`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Form Section */}
      <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
        <h3 className="text-xl font-bold mb-4 text-text">Card Details</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text/80 mb-1">Card Type</label>
            <select 
              value={cardType} 
              onChange={(e) => setCardType(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-2 text-text focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="summary">Summary</option>
              <option value="summary_large_image">Summary Large Image</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text/80 mb-1">Title</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-2 text-text focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Article Title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text/80 mb-1">Description</label>
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full bg-background border border-border rounded-lg px-4 py-2 text-text focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="A brief description of your content"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text/80 mb-1">Image URL</label>
            <input 
              type="text" 
              value={imageUrl} 
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-2 text-text focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="https://yoursite.com/image.jpg"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text/80 mb-1">Site Handle</label>
              <input 
                type="text" 
                value={siteHandle} 
                onChange={(e) => setSiteHandle(e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-4 py-2 text-text focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="@YourSite"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text/80 mb-1">Creator Handle</label>
              <input 
                type="text" 
                value={creatorHandle} 
                onChange={(e) => setCreatorHandle(e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-4 py-2 text-text focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="@Author"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Preview & Code Section */}
      <div className="space-y-6">
        <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-text">Preview</h3>
          
          <div className="border border-border/50 rounded-xl overflow-hidden bg-background max-w-[500px] mx-auto">
            {cardType === 'summary_large_image' ? (
              <div className="flex flex-col">
                <div className="w-full h-64 bg-secondary flex items-center justify-center text-text/50 overflow-hidden relative border-b border-border/50">
                  {imageUrl ? (
                    <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
                  ) : null}
                  <div className={`absolute inset-0 flex items-center justify-center bg-secondary ${imageUrl ? 'hidden' : ''}`}>
                    No Image
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-text/70 text-sm mb-1">{siteHandle.replace('@', '')}.com</div>
                  <div className="text-text font-bold text-base line-clamp-1 mb-1">{title || 'Title Here'}</div>
                  <div className="text-text/70 text-sm line-clamp-2">{description || 'Description will appear here'}</div>
                </div>
              </div>
            ) : (
              <div className="flex p-4 gap-4 items-center">
                <div className="flex-1 min-w-0">
                  <div className="text-text font-bold text-base line-clamp-1 mb-1">{title || 'Title Here'}</div>
                  <div className="text-text/70 text-sm line-clamp-2 mb-1">{description || 'Description will appear here'}</div>
                  <div className="text-text/70 text-xs flex items-center gap-1">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><g><path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"></path><path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"></path></g></svg>
                    {siteHandle.replace('@', '')}.com
                  </div>
                </div>
                <div className="w-24 h-24 bg-secondary rounded-lg overflow-hidden flex items-center justify-center text-text/50 shrink-0 relative">
                  {imageUrl ? (
                    <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
                  ) : null}
                  <div className={`absolute inset-0 flex items-center justify-center bg-secondary ${imageUrl ? 'hidden' : ''}`}>
                    No Image
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <CodeBlock 
            code={generateCode()} 
            language="html" 
            fileName="twitter-card.html"
          />
        </div>
      </div>
    </div>
  );
}
