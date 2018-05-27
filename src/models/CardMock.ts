import {ICard} from './Card';

export const getCharacterCardMock = (code: string = '01001'): ICard => ({
  'sides': ['1RD',
    '2RD',
    '1F',
    '1Dc',
    '1R',
    '-'],
  'set_code': 'AW',
  'set_name': 'Awakenings',
  'type_code': 'character',
  'type_name': 'Character',
  'faction_code': 'red',
  'faction_name': 'Command',
  'affiliation_code': 'villain',
  'affiliation_name': 'Villain',
  'rarity_code': 'L',
  'rarity_name': 'Legendary',
  'position': 1,
  'code': code,
  'ttscardid': '1300',
  'name': 'Captain Phasma',
  'subtitle': 'Elite Trooper',
  'cost': null,
  'health': 11,
  'points': '12\/15',
  'text': 'Your non-unique characters have the Guardian keyword.',
  'deck_limit': 1,
  'flavor': '"Whatever you\'re planning, it won\'t work."',
  'illustrator': 'Darren Tan',
  'is_unique': true,
  'has_die': true,
  'has_errata': false,
  'url': 'http:\/\/swdestinydb.com\/card\/01001',
  'imagesrc': 'http:\/\/swdestinydb.com\/bundles\/cards\/en\/01\/01001.jpg',
  'label': 'Captain Phasma - Elite Trooper',
  'cp': 1215
});

export const getEventCardMock: ICard = {
  'set_code': 'AW',
  'set_name': 'Awakenings',
  'type_code': 'event',
  'type_name': 'Event',
  'faction_code': 'blue',
  'faction_name': 'Force',
  'affiliation_code': 'hero',
  'affiliation_name': 'Hero',
  'rarity_code': 'C',
  'rarity_name': 'Common',
  'position': 116,
  'code': '01116',
  'ttscardid': '1445',
  'name': 'Force Misdirection',
  'subtitle': null,
  'cost': 1,
  'health': null,
  'points': null,
  'text': 'Choose a symbol showing on one of your Blue dice. Then remove all of an opponent\'s dice showing that symbol.',
  'deck_limit': 2,
  'flavor': null,
  'illustrator': 'Jarreau Wimberly',
  'is_unique': false,
  'has_die': false,
  'has_errata': false,
  'url': 'http:\/\/swdestinydb.com\/card\/01116',
  'imagesrc': 'http:\/\/swdestinydb.com\/bundles\/cards\/en\/01\/01116.jpg',
  'label': 'Force Misdirection',
  'cp': 100
};

export const getSupportCardMock: ICard = {
  'set_code': 'AW',
  'set_name': 'Awakenings',
  'type_code': 'support',
  'type_name': 'Support',
  'faction_code': 'blue',
  'faction_name': 'Force',
  'affiliation_code': 'hero',
  'affiliation_name': 'Hero',
  'rarity_code': 'U',
  'rarity_name': 'Uncommon',
  'position': 123,
  'code': '01123',
  'ttscardid': '1452',
  'name': 'Jedi Council',
  'subtitle': null,
  'cost': 2,
  'health': null,
  'points': null,
  'text': '<b>Action<\/b> - Exhaust this support to look at the top 2 cards of a player\'s deck. Then you may discard one of those cards and have that player draw the other.',
  'deck_limit': 2,
  'flavor': null,
  'illustrator': 'David Auden Nash',
  'is_unique': true,
  'has_die': false,
  'has_errata': false,
  'url': 'http:\/\/swdestinydb.com\/card\/01123',
  'imagesrc': 'http:\/\/swdestinydb.com\/bundles\/cards\/en\/01\/01123.jpg',
  'label': 'Jedi Council',
  'cp': 200
};

export const getUpgradeCardMock: ICard = {
  'sides': ['+1RD',
    '+1MD',
    '1Sh',
    '1R',
    '+1R',
    '-'],
  'set_code': 'SoR',
  'set_name': 'Spirit of Rebellion',
  'type_code': 'upgrade',
  'type_name': 'Upgrade',
  'subtype_code': 'ability',
  'subtype_name': 'Ability',
  'faction_code': 'red',
  'faction_name': 'Command',
  'affiliation_code': 'villain',
  'affiliation_name': 'Villain',
  'rarity_code': 'R',
  'rarity_name': 'Rare',
  'position': 6,
  'code': '02006',
  'ttscardid': '2205',
  'name': 'Imperial Discipline',
  'subtitle': null,
  'cost': 1,
  'health': null,
  'points': null,
  'text': 'Red character only.\n<b>Action<\/b> - Remove this die to turn one of this character\'s character or upgrade dice to a side showing ranged damage ([ranged]) or a resource ([resource]).',
  'deck_limit': 2,
  'flavor': null,
  'illustrator': 'Mariusz Gandzel',
  'is_unique': false,
  'has_die': true,
  'has_errata': false,
  'url': 'http:\/\/swdestinydb.com\/card\/02006',
  'imagesrc': 'http:\/\/swdestinydb.com\/bundles\/cards\/en\/02\/02006.jpg',
  'label': 'Imperial Discipline',
  'cp': 100
};

export const getPlotCardMock: ICard = {
  'set_code': 'LEG',
  'set_name': 'Legacies',
  'type_code': 'plot',
  'type_name': 'Plot',
  'faction_code': 'gray',
  'faction_name': 'General',
  'affiliation_code': 'neutral',
  'affiliation_name': 'Neutral',
  'rarity_code': 'U',
  'rarity_name': 'Uncommon',
  'position': 168,
  'code': '05168',
  'ttscardid': '47327',
  'name': 'Espionage',
  'subtitle': null,
  'cost': null,
  'health': null,
  'points': '1',
  'text': 'After setup, discard the top card from each deck.',
  'deck_limit': 1,
  'flavor': null,
  'illustrator': 'Tiziano Baracchi',
  'is_unique': false,
  'has_die': false,
  'has_errata': false,
  'url': 'http:\/\/swdestinydb.com\/card\/05168',
  'imagesrc': 'http:\/\/swdestinydb.com\/bundles\/cards\/en\/05\/05168.jpg',
  'label': 'Espionage',
  'cp': 100
};

export const getCardMockList: ICard[] = [
  getCharacterCardMock(),
  getEventCardMock,
  getSupportCardMock,
  getUpgradeCardMock,
  getPlotCardMock,
];
