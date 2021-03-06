export default {
  melee: {
    formFields:
    {
      name: 'text',
      dmgSm: 'text',
      dmgLg: 'text',
      enc: 'number',
      cost: 'number',
      qty: 'number',
    },
    headers: [
      '#',
      'name',
      'dmg (sm/md)',
      'dmg (lg)',
      'enc',
      'cost',
      'qty',
      'actions',
    ],
    items: [
      {
        name: 'Axe, battle',
        dmgSm: '1d8',
        dmgLg: '1d8',
        enc: 7,
        cost: 5.00,
        qty: 5,
      },
      {
        name: 'Axe, hand',
        dmgSm: '1d6',
        dmgLg: '1d4',
        enc: 5,
        cost: 1.00,
        qty: 1,
      },
      {
        name: 'Club',
        dmgSm: '1d4',
        dmgLg: '1d3',
        enc: 3,
        cost: 0.02,
        qty: 5,
      },
      {
        name: 'Dagger',
        dmgSm: '1d4',
        dmgLg: '1d3',
        enc: 1,
        cost: 2.00,
        qty: 3,
      },
      {
        name: 'Flail, heavy',
        dmgSm: '1d6+1',
        dmgLg: '2d4',
        enc: 10,
        cost: 3.00,
        qty: 4,
      },
      {
        name: 'Flail, light',
        dmgSm: '1d4+1',
        dmgLg: '1d4+1',
        enc: 4,
        cost: 6.00,
        qty: 6,
      },
      {
        name: 'Halberd',
        dmgSm: '1d10',
        dmgLg: '2d6',
        enc: 18,
        cost: 9.00,
        qty: 5,
      },
      {
        name: 'Hammer, war, heavy',
        dmgSm: '1d6+1',
        dmgLg: '1d6',
        enc: 10,
        cost: 7.00,
        qty: 1,
      },
      {
        name: 'Hammer, war, light',
        dmgSm: '1d4+1',
        dmgLg: '1d4+1',
        enc: 5,
        cost: 1.00,
        qty: 5,
      },
      {
        name: 'Javelin*',
        dmgSm: '1d6',
        dmgLg: '1d4',
        enc: 4,
        cost: 0.5,
        qty: 3,
      },
      {
        name: 'Lance*',
        dmgSm: '2d4+1',
        dmgLg: '3d6',
        enc: 15,
        cost: 6.00,
        qty: 6,
      },
      {
        name: 'Mace, heavy',
        dmgSm: '1d6+1',
        dmgLg: '1d6',
        enc: 10,
        cost: 10.00,
        qty: 1,
      },
      {
        name: 'Mace, light',
        dmgSm: '1d4+1',
        dmgLg: '1d4+1',
        enc: 5,
        cost: 4.00,
        qty: 2,
      },
      {
        name: 'Morning star',
        dmgSm: '2d4',
        dmgLg: '1d6+1',
        enc: 12,
        cost: 5.00,
        qty: 5,
      },
      {
        name: 'Pick, heavy',
        dmgSm: '1d6+1',
        dmgLg: '2d4',
        enc: 10,
        cost: 8.00,
        qty: 1,
      },
      {
        name: 'Pick, light',
        dmgSm: '1d4+1',
        dmgLg: '1d4',
        enc: 4,
        cost: 5.00,
        qty: 3,
      },
      {
        name: 'Pole-arm*',
        dmgSm: 'd6+1',
        dmgLg: '1d10',
        enc: 8,
        cost: 6.00,
        qty: 5,
      },
      {
        name: 'Spear***',
        dmgSm: '1d6',
        dmgLg: '1d8',
        enc: 5,
        cost: 1.00,
        qty: 6,
      },
      {
        name: 'Staff',
        dmgSm: '1d6',
        dmgLg: '1d6',
        enc: 5,
        cost: 0.50,
        qty: 3,
      },
      {
        name: 'Sword, claymore/bastard',
        dmgSm: '2d4',
        dmgLg: '2d8',
        enc: 10,
        cost: 25.00,
        qty: 5,
      },
      {
        name: 'Sword, broad',
        dmgSm: '2d4',
        dmgLg: '1d6+1',
        enc: 8,
        cost: 10.00,
        qty: 1,
      },
      {
        name: 'Sword, long',
        dmgSm: '1d8',
        dmgLg: '1d12',
        enc: 7,
        cost: 15.00,
        qty: 6,
      },
      {
        name: 'Sword, scimitar',
        dmgSm: '1d8',
        dmgLg: '1d8',
        enc: 5,
        cost: 15.00,
        qty: 1,
      },
      {
        name: 'Sword, short',
        dmgSm: '1d6',
        dmgLg: '1d8',
        enc: 3,
        cost: 8.00,
        qty: 3,
      },
      {
        name: 'Sword, two-handed',
        dmgSm: '1d10',
        dmgLg: '3d6',
        enc: 25,
        cost: 30.00,
        qty: 5,
      },
      {
        name: 'Trident*',
        dmgSm: '1d6+1',
        dmgLg: '3d4',
        enc: 5,
        cost: 4.00,
        qty: 2,
      },
    ],
  },
  ammo: {
    formFields: {
      name: 'text',
      dmgSm: 'text',
      dmgLg: 'text',
      enc: 'number',
      cost: 'number',
      qty: 'number',
    },
    headers: [
      '#',
      'name',
      'dmg (sm/md)',
      'dmg (lg)',
      'enc',
      'cost',
      'qty',
      'actions',
    ],
    items: [
      {
        name: 'Arrows*',
        dmgSm: '1d6',
        dmgLg: '1d6',
        enc: 4,
        cost: 2.00,
        qty: 6,
      },
      {
        name: 'Bolt, heavy crossbow*',
        dmgSm: '1d6+1',
        dmgLg: '1d6+1',
        enc: 4,
        cost: 4.00,
        qty: 2,
      },
      {
        name: 'Bolt, light crossbow*',
        dmgSm: '1d4+1',
        dmgLg: '1d4+1',
        enc: 2,
        cost: 2.00,
        qty: 6,
      },
      {
        name: 'Sling-bullet*',
        dmgSm: '1d4+1',
        dmgLg: '1d6+1',
        enc: 4,
        cost: 1.00,
        qty: 1,
      },
      {
        name: 'Sling-stone*',
        dmgSm: '1d4',
        dmgLg: '1d4',
        enc: 2,
        cost: 0.05,
        qty: 6,
      },
    ],
  },
  missile: {
    formFields: {
      name: 'text',
      dmgSm: 'text',
      dmgLg: 'text',
      rof: 'number',
      range: 'number',
      enc: 'number',
      cost: 'number',
      qty: 'number',
    },
    headers: [
      '#',
      'name',
      'dmg (sm/md)',
      'dmg (lg)',
      'ROF',
      'range',
      'enc',
      'cost',
      'qty',
      'actions',
    ],
    items: [
      {
        name: 'Axe, throwing',
        dmgSm: '1d6',
        dmgLg: '1d4',
        rof: 1,
        range: 10,
        enc: 5,
        cost: 1.00,
        qty: 5,
      },
      {
        name: 'Bow, long',
        dmgSm: '1d6',
        dmgLg: '1d6',
        rof: 2,
        range: 70,
        enc: 12,
        cost: 60.00,
        qty: 1,
      },
      {
        name: 'Bow, short',
        dmgSm: '1d6',
        dmgLg: '1d6',
        rof: 2,
        range: 50,
        enc: 8,
        cost: 15.00,
        qty: 3,
      },
      {
        name: 'Club',
        dmgSm: '1d4',
        dmgLg: '1d3',
        rof: 1,
        range: 10,
        enc: 3,
        cost: 0.02,
        qty: 3,
      },
      {
        name: 'Composite bow, long*',
        dmgSm: '1d6',
        dmgLg: '1d6',
        rof: 2,
        range: 60,
        enc: 13,
        cost: 100.00,
        qty: 3,
      },
      {
        name: 'Composite bow, short*',
        dmgSm: '1d6',
        dmgLg: '1d6',
        rof: 2,
        range: 50,
        enc: 9,
        cost: 75.00,
        qty: 5,
      },
      {
        name: 'Crossbow, heavy**',
        dmgSm: '1d6+1',
        dmgLg: '1d6+1',
        rof: '1/2',
        range: 60,
        enc: 12,
        cost: 20.00,
        qty: 3,
      },
      {
        name: 'Crossbow, light',
        dmgSm: '1d4+1',
        dmgLg: '1d4+1',
        rof: 1,
        range: 60,
        enc: 4,
        cost: 12.00,
        qty: 1,
      },
      {
        name: 'Dagger, throwing',
        dmgSm: '1d4',
        dmgLg: '1d4',
        rof: 2,
        range: 10,
        enc: 1,
        cost: 2.00,
        qty: 4,
      },
      {
        name: 'Dart***',
        dmgSm: '1d3',
        dmgLg: '1d2',
        rof: 3,
        range: 15,
        enc: 6,
        cost: 1.80,
        qty: 4,
      },
      {
        name: 'Hammer, throwing',
        dmgSm: '1d4+1',
        dmgLg: '1d4',
        rof: 1,
        range: 10,
        enc: 5,
        cost: 1.00,
        qty: 1,
      },
      {
        name: 'Javelin',
        dmgSm: '1d6',
        dmgLg: '1d4',
        rof: 1,
        range: 20,
        enc: 2,
        cost: 0.5,
        qty: 1,
      },
      {
        name: 'Sling',
        dmgSm: '1d4+1 or 1d4',
        dmgLg: '1d6+1 or 1d4',
        rof: 1,
        range: 35,
        enc: '1/2',
        cost: 0.5,
        qty: 2,
      },
      {
        name: 'Spear',
        dmgSm: '1d6',
        dmgLg: '1d8',
        rof: 1,
        range: 15,
        enc: 5,
        cost: 1.00,
        qty: 4,
      },
    ],
  },
  armor: {
    formFields: {
      name: 'text',
      enc: 'number',
      move: 'number',
      ac: 'number',
      cost: 'number',
      qty: 'number',
    },
    headers: [
      '#',
      'name',
      'enc',
      'move',
      'AC',
      'cost',
      'qty',
      'actions',
    ],
    items: [
      {
        name: 'Banded',
        enc: 35,
        move: 90,
        ac: -6,
        cost: 90.00,
        qty: 5,
      },
      {
        name: 'Mail hauberk or byrnie (chain)',
        enc: 30,
        move: 90,
        ac: -5,
        cost: 75,
        qty: 5,
      },
      {
        name: 'Mail, elfin',
        enc: 15,
        move: 120,
        ac: -5,
        cost: 'N/A',
        qty: 0,
      },
      {
        name: 'Leather',
        enc: 15,
        move: 120,
        ac: -2,
        cost: 5.00,
        qty: 1,
      },
      {
        name: 'Padded gambeson',
        enc: 10,
        move: 90,
        ac: -2,
        cost: 4.00,
        qty: 6,
      },
      {
        name: 'Plate',
        enc: 45,
        move: 60,
        ac: -7,
        cost: 400.00,
        qty: 5,
      },
      {
        name: 'Ring',
        enc: 35,
        move: 90,
        ac: -3,
        cost: 30.00,
        qty: 3,
      },
      {
        name: 'Scale or lamellar',
        enc: 40,
        move: 60,
        ac: -4,
        cost: 45.00,
        qty: 4,
      },
      {
        name: 'Shield, large',
        enc: 10,
        move: 'N/A',
        ac: -1,
        cost: 15.00,
        qty: 1,
      },
      {
        name: 'Shield, medium',
        enc: 8,
        move: 'N/A',
        ac: -1,
        cost: 12.00,
        qty: 1,
      },
      {
        name: 'Shield, small',
        enc: 5,
        move: 'N/A',
        ac: -1,
        cost: 10.00,
        qty: 1,
      },
      {
        name: 'Splint',
        enc: 40,
        move: 60,
        ac: -6,
        cost: 80.00,
        qty: 6,
      },
      {
        name: 'Studded',
        enc: 20,
        move: 90,
        ac: -3,
        cost: 15.00,
        qty: 6,
      },
    ],
  },
};
