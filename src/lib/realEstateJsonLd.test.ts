import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { buildRealEstateListingJsonLd } from './realEstateJsonLd';

describe('buildRealEstateListingJsonLd', () => {
  it('builds valid schema.org RealEstateListing JSON-LD', () => {
    const ld = buildRealEstateListingJsonLd({
      id: 'prop-101',
      title: 'Palm Jumeirah Signature Villa',
      description: '6BR beachfront villa with private pool',
      url: 'https://whitecaves.com/en/properties/palm-jumeirah-villa',
      priceAed: 45_000_000,
      addressLocality: 'Palm Jumeirah, Dubai',
      bedrooms: 6,
      areaSqFt: 12500,
    });

    assert.equal(ld['@type'], 'RealEstateListing');
    assert.equal(ld.offers.price, 45_000_000);
    assert.equal(ld.offers.priceCurrency, 'AED');
    assert.equal(ld.address?.addressCountry, 'AE');
    assert.equal(ld.floorSize?.unitCode, 'FTK');
  });
});
