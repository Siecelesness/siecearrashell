const { combineStats, skillSet, makeAuto, addAura } = require('../facilitators.js');
const { base, gunCalcNames } = require('../constants.js');
const g = require('../gunvals.js');
const { bullet } = require('./generics.js');

exports.miniboss = {
    PARENT: ["genericTank"],
    TYPE: "miniboss",
    DANGER: 6,
    SKILL: skillSet({
        rld: 0.7,
        dam: 0.5,
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,
    }),
    LEVEL: 45,
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
    AI: {
        NO_LEAD: true,
    },
    FACING_TYPE: "autospin",
    HITS_OWN_TYPE: "hardOnlyBosses",
    BROADCAST_MESSAGE: "A visitor has left!",
    BODY: {
        PUSHABILITY: 0.05
    }
};

// GUNS
exports.baseTrapTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    INDEPENDENT: true,
    COLOR: 16,
    GUNS: [
        {
            POSITION: [16, 14, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 14, 1.8, 16, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.lowpower, g.pound, g.destroy, g.doublereload, g.hexatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
                AUTOFIRE: true,
            },
        },
    ],
}
exports.terrestrialTrapTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    INDEPENDENT: true,
    COLOR: 16,
    GUNS: [
        {
            POSITION: [13, 14, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 14, 1.8, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.lowpower, g.pound, g.destroy, g.doublereload, g.hexatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
                AUTOFIRE: true,
            },
        },
    ],
}
exports.machineTripleTurret = {
    PARENT: ["genericTank"],
    LABEL: "Machine Gun",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [ ["spin", {speed: 0.04}] ],
    INDEPENDENT: true,
    COLOR: 5,
    GUNS: [
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
                TYPE: "bullet",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
                TYPE: "bullet",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
                TYPE: "bullet",
                AUTOFIRE: true,
            },
        },
    ],
};
exports.skimmerTurret = {
    PARENT: ["genericTank"],
    LABEL: "Skimmer",
    BODY: {
        FOV: 2 * base.FOV,
    },
    COLOR: 2,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            POSITION: [10, 14, -0.5, 9, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                ]),
                TYPE: "hypermissile",
            },
        },
        {
            POSITION: [17, 15, 1, 0, 0, 0, 0],
        },
    ],
};
exports.twisterTurret = {
    PARENT: ["genericTank"],
    LABEL: "Twister",
    BODY: {
        FOV: 2,
    },
    COLOR: 13,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            POSITION: [10, 13, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 14, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                    g.morespeed,
                    g.one_third_reload,
                ]),
                TYPE: "spinmissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.hyperTwisterTurret = {
    PARENT: ["genericTank"],
    LABEL: "Twister",
    BODY: {
        FOV: 2,
    },
    COLOR: 13,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            POSITION: [10, 13, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 14, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                    g.morespeed,
                    g.one_third_reload,
                ]),
                TYPE: "hyperspinmissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.boomerTurret = {
    PARENT: ["genericTank"],
    LABEL: "Boomer",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 14,
    GUNS: [
        {
            POSITION: [7.75, 10, 1, 12, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.fake]),
                TYPE: "boomerang",
            },
        },
        {
            POSITION: [6, 10, -1.5, 7, 0, 0, 0],
        },
        {
            POSITION: [2, 10, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
                TYPE: "boomerang",
            },
        },
    ],
};
exports.triTrapGuardTurret = {
    PARENT: ["genericTank"],
    COLOR: 5,
    CONTROLLERS: [["spin", { independent: true }]],
    GUNS: [],
};
for(let i = 0; i < 3; i++) {
    exports.triTrapGuardTurret.GUNS.push(
        {
            POSITION: [17, 8, 1, 0, 0, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [13, 8, 1, 0, 0, 120*i+60, 0],
        },
        {
            POSITION: [4, 8, 1.7, 13, 0, 120*i+60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    )
};
exports.eliteSpinnerCyclone = {
    PARENT: ["genericTank"],
    COLOR: 5,
    CONTROLLERS: [["spin", { speed: 0.1, independent: true }]],
    GUNS: [],
};
for (let i = 0; i < 12; i++) {
    let delay;
    switch (i % 4) {
        case 0:
            delay = 0;
            break;
        case 1:
            delay = 0.5;
            break;
        case 2:
            delay = 0.25;
            break;
        case 3:
            delay = 0.75;
            break;
    }
    exports.eliteSpinnerCyclone.GUNS.push(
        {
            POSITION: [15, 3.5, 1, 0, 0, 30 * i, delay],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.morespeed]),
                TYPE: "bullet",
            },
        },
    )
};

// ELITE CRASHERS
exports.elite = {
    PARENT: ["miniboss"],
    LABEL: "Elite Crasher",
    COLOR: 5,
    SHAPE: 3,
    SIZE: 27,
    VARIES_IN_SIZE: true,
    VALUE: 15e4,
    BODY: {
        FOV: 1.25,
        SPEED: 0.1 * base.SPEED,
        HEALTH: 7 * base.HEALTH,
        DAMAGE: 2.5 * base.DAMAGE,
    },
};
exports.eliteDestroyer = {
    PARENT: ["elite"],
    UPGRADE_LABEL: "Elite Destroyer",
    GUNS: [
        {
            POSITION: [5, 16, 1, 6, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
                TYPE: "bullet",
                LABEL: "Devastator",
            },
        },
        {
            POSITION: [5, 16, 1, 6, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
                TYPE: "bullet",
                LABEL: "Devastator",
            },
        },
        {
            POSITION: [5, 16, 1, 6, 0, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
                TYPE: "bullet",
                LABEL: "Devastator",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [11, 0, 0, 180, 360, 0],
            TYPE: ["crasherSpawner"],
        },
        {
            POSITION: [11, 0, 0, 60, 360, 0],
            TYPE: ["crasherSpawner"],
        },
        {
            POSITION: [11, 0, 0, -60, 360, 0],
            TYPE: ["crasherSpawner"],
        },
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: [
                "bigauto4gun",
                {
                    INDEPENDENT: true,
                    COLOR: 5,
                },
            ],
        },
    ],
};
exports.eliteGunner = {
    PARENT: ["elite"],
    UPGRADE_LABEL: "Elite Gunner",
    FACING_TYPE: "toTarget",
    GUNS: [
        {
            POSITION: [14, 16, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 16, 1.5, 14, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: [
                    "pillbox",
                    {
                        INDEPENDENT: true,
                    },
                ],
            },
        },
        {
            POSITION: [6, 14, -2, 2, 0, 60, 0],
        },
        {
            POSITION: [6, 14, -2, 2, 0, 300, 0],
        },
    ],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [
        {
            POSITION: [14, 8, 0, 60, 180, 0],
            TYPE: ["auto4gun"],
        },
        {
            POSITION: [14, 8, 0, 300, 180, 0],
            TYPE: ["auto4gun"],
        },
    ],
};
exports.eliteSprayer = {
    PARENT: ["elite"],
    UPGRADE_LABEL: "Elite Sprayer",
    SKILL: [0, 9, 3, 9, 2, 9, 9, 9, 9, 0],
    AI: { NO_LEAD: false },
    HAS_NO_RECOIL: true,
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6, 0, 0, 0, 360, 1],
            TYPE: ["machineTripleTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [9, 6, -5, 180, 130, 0],
            TYPE: ["sprayer", { COLOR: 16 }],
        },
        {
            POSITION: [9, 6, 5, 180, 130, 0],
            TYPE: ["sprayer", { COLOR: 16 }],
        },
        {
            POSITION: [9, 6, 5, 60, 130, 0],
            TYPE: ["sprayer", { COLOR: 16 }],
        },
        {
            POSITION: [9, 6, -5, 60, 130, 0],
            TYPE: ["sprayer", { COLOR: 16 }],
        },
        {
            POSITION: [9, 6, 5, -60, 130, 0],
            TYPE: ["sprayer", { COLOR: 16 }],
        },
        {
            POSITION: [9, 6, -5, -60, 130, 0],
            TYPE: ["sprayer", { COLOR: 16 }],
        },
    ],
};
exports.eliteBattleship = {
    PARENT: ["elite"],
    UPGRADE_LABEL: "Elite Battleship",
    GUNS: [
        {
            POSITION: [4, 6, 0.6, 7, -8, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 0, 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 8, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, -8, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 0, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 8, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, -8, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 0, -60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 8, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [5, 7, 0, 0, 360, 1],
            TYPE: [
                "autoTankGun",
                {
                    INDEPENDENT: true,
                    COLOR: 5,
                },
            ],
        },
        {
            POSITION: [5, 7, 0, 120, 360, 1],
            TYPE: [
                "autoTankGun",
                {
                    INDEPENDENT: true,
                    COLOR: 5,
                },
            ],
        },
        {
            POSITION: [5, 7, 0, 240, 360, 1],
            TYPE: [
                "autoTankGun",
                {
                    INDEPENDENT: true,
                    COLOR: 5,
                },
            ],
        },
    ],
};
exports.eliteSpawner = {
    PARENT: ["elite"],
    UPGRADE_LABEL: "Elite Spawner",
    MAX_CHILDREN: 9,
    AI: { STRAFE: false },
    GUNS: [
        {
            POSITION: [11, 16, 1, 0, 0, 60, 0],
        },
        {
            POSITION: [11, 16, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [11, 16, 1, 0, 0, 300, 0],
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [2, 18, 1, 11, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak, g.celeslower]),
                TYPE: ["sentrySwarm", {GIVE_KILL_MESSAGE: false}],
                SYNCS_SKILLS: true,
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [2, 18, 1, 11, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak, g.celeslower]),
                TYPE: ["sentryTrap", {GIVE_KILL_MESSAGE: false}],
                SYNCS_SKILLS: true,
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [2, 18, 1, 11, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak, g.celeslower]),
                TYPE: ["sentryGun", {GIVE_KILL_MESSAGE: false}],
                SYNCS_SKILLS: true,
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: ["auto4gun", { INDEPENDENT: false, COLOR: 5 }],
        },
    ],
};
exports.eliteTrapGuard = {
    PARENT: ["elite"],
    UPGRADE_LABEL: "Elite Trap Guard",
    AI: { STRAFE: false },
    GUNS: [],
    TURRETS: [
        {
            POSITION: [9.5, 0, 0, 0, 360, 1],
            TYPE: "triTrapGuardTurret",
        },
    ],
};
for (let i = 0; i < 3; i++) {
    exports.eliteTrapGuard.GUNS.push(
        {
            POSITION: [10.5, 6, 1, 0, 0, 120*i+60, 0],
        },
        {
            POSITION: [3, 6, 1.7, 10.5, 0, 120*i+60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    )
    exports.eliteTrapGuard.TURRETS.push(
        {
            POSITION: [5, 8, -7, 120*i+60, 160, 0],
            TYPE: ["autoTurret", { INDEPENDENT: false }],
        },
        {
            POSITION: [5, 8, 7, 120*i+60, 160, 0],
            TYPE: ["autoTurret", { INDEPENDENT: false }],
        },
    )
};
exports.eliteSpinner = {
    PARENT: ["elite"],
    UPGRADE_LABEL: "Elite Spinner",
    AI: { STRAFE: false },
    FACING_TYPE: "fastspin",
    GUNS: [],
    TURRETS: [
        {
            POSITION: [9.5, 0, 0, 0, 360, 1],
            TYPE: ["eliteSpinnerCyclone", {COLOR: 5}],
        },
    ],
};
for (let i = 0; i < 3; i++) {
    exports.eliteSpinner.GUNS.push(
        {
            POSITION: [9.5, 2, 1, -1.5, 11.5, 120*i+10, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.morespeed]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [9.5, 2, 1, 3.5, 6.5, 120*i+10, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.morespeed]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [9.5, 2, 1, 8.5, 1.5, 120*i+10, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.morespeed]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [2, 20, 0.75, 8, 0, 120*i+60, 0],
        },
    )
};

// OLD ELITE
exports.oldEliteSprayer = {
    PARENT: ["elite"],
    UPGRADE_LABEL: "Elite Sprayer (Old)",
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [
        {
            POSITION: [14, 6, 0, 180, 190, 0],
            TYPE: [
                "sprayer",
                {
                    COLOR: 5,
                },
            ],
        },
        {
            POSITION: [14, 6, 0, 60, 190, 0],
            TYPE: [
                "sprayer",
                {
                    COLOR: 5,
                },
            ],
        },
        {
            POSITION: [14, 6, 0, -60, 190, 0],
            TYPE: [
                "sprayer",
                {
                    COLOR: 5,
                },
            ],
        },
    ],
};

// Legionary Crasher
exports.legionaryTwin = {
    PARENT: ["auto4gun"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [17.5, 5, 1, 0, -4.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17.5, 5, 1, 0, 4.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
                TYPE: "bullet",
            },
        },
    ],
}
exports.legionaryPillbox = {
    PARENT: ["unsetTrap"],
    LABEL: "Pillbox",
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "legionaryTwin",
        },
    ],
}
exports.legionaryCrasherTop = {
    PARENT: ["elite"],
    AI: { STRAFE: false, NO_LEAD: false },
    CONTROLLERS: [
        ["spin", { independent: true, speed: -0.005 }],
        //"nearestDifferentMaster",
    ],
    INDEPENDENT: true,
    GUNS: [],
    TURRETS: [],
}
for (let i = 0; i < 3; i++) {
    exports.legionaryCrasherTop.GUNS.push(
        {
            POSITION: [4, 9.5, 0.7, 7, 5, 120*i+60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.morespeed, g.morespeed, {size: 0.7, speed: 5, maxSpeed: 2, shudder: 5, range: 1.5}]),
                TYPE: [ "swarm", { INDEPENDENT: true } ],
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true,
                
            },
        },
        {
            POSITION: [4, 9.5, 0.7, 7, -5, 120*i+60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.morespeed, g.morespeed, {size: 0.7, speed: 5, maxSpeed: 2, shudder: 5, range: 1.5}]),
                TYPE: [ "swarm", { INDEPENDENT: true } ],
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true,
            },
        },
    )
    exports.legionaryCrasherTop.TURRETS.push(
        {
            POSITION: [9.5, 10, 0, 120*i, 190, 0],
            TYPE: "auto4gun",
        },
    )
}
exports.legionaryCrasher = {
    PARENT: ["elite"],
    LABEL: "Legionary Crasher",
    AI: { STRAFE: false, NO_LEAD: false },
    HAS_NO_RECOIL: true,
    VALUE: 5e6,
    SIZE: 80,
    BODY: {
        FOV: 1.5,
        SPEED: 0.1 * base.SPEED,
        HEALTH: 2000,
        DAMAGE: 5 * base.DAMAGE,
    },
    GUNS: [
        {
            POSITION: [30, 4.5, 1, 0, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([{health: 1.2}]),
                TYPE: ['sprayerLegion', {LABEL: "Elite Legion"}],
                BORDERLESS: true,
                DRAW_FILL: false,
                MAX_CHILDREN: 1,
            }
        },
        {
            POSITION: [30, 4.5, 1, 0, 0, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([{health: 1.2}]),
                TYPE: ['eliteGunner', {LABEL: "Elite Legion"}],
                BORDERLESS: true,
                DRAW_FILL: false,
                MAX_CHILDREN: 1,
            }
        },
        {
            POSITION: [30, 4.5, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([{health: 1.2}]),
                TYPE: ['eliteSpawner', {LABEL: "Elite Legion"}],
                BORDERLESS: true,
                DRAW_FILL: false,
                MAX_CHILDREN: 1,
            }
        },
    ],
    TURRETS: [
        {
            POSITION: [12, 0, 0, 0, 360, 1],
            TYPE: "legionaryCrasherTop",
        }
    ],
}
for (let i = 0; i < 3; i++) {
    exports.legionaryCrasher.GUNS.push(
        {
            POSITION: [14.5, 13, 1, 0, 0, 120*i, 0],
        },
        {
            POSITION: [3, 13, 1.7, 14.5, 0, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.pound, g.destroy, g.veryfast, {size: 0.6, maxSpeed: 3}]),
                TYPE: "legionaryPillbox",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    )
}
for (let i = 0; i < 3; i++) {
    exports.legionaryCrasher.GUNS.push(
        {
            POSITION: [5, 12, 1.6, -11, 0, 120*i, 0],
        }
    )
    exports.legionaryCrasher.TURRETS.push(
        {
            POSITION: [14, 8, 0, 120*i+60, 180, 0],
            TYPE: [ "sprayer", { COLOR: 5, } ],
        },
    )
}

exports.sprayerLegion = {
    PARENT: ["elite"],
    UPGRADE_LABEL: "Sprayer Legion",
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [
        {
            POSITION: [14, 6, 0, 180, 190, 0],
            TYPE: ["machineGun", {COLOR: 5}],
        },
        {
            POSITION: [14, 6, 0, 60, 190, 0],
            TYPE: ["machineGun", {COLOR: 5}],
        },
        {
            POSITION: [14, 6, 0, -60, 190, 0],
            TYPE: ["machineGun", {COLOR: 5}],
        },
    ],
};

// STRANGE BOSSES
exports.waferbread = {
    PARENT: ["sunchip"],
    NECRO: [0],
    SHAPE: 0
};
exports.sorcerer = {
    PARENT: ["miniboss"],
    LABEL: "Sorcerer",
    DANGER: 7,
    SHAPE: 0,
    COLOR: 6,
    SIZE: 26,
    MAX_CHILDREN: 50,
    FACING_TYPE: "autospin",
    VALUE: 2e5,
    BODY: {
        FOV: 0.5,
        SPEED: 0.12 * base.SPEED,
        HEALTH: 6 * base.HEALTH,
        DAMAGE: 2 * base.DAMAGE,
    },
    GUNS: Array(2).fill().map((_, i) => ({
        POSITION: [3.5, 8.65, 1.2, 8, 0, i * 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.mach, g.machgun, { size: 0.4, spray: 150, speed: 2, shudder: 1.75 }]),
            TYPE: "waferbread",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true,
        },
    }))
};
exports.summoner = {
    PARENT: ["miniboss"],
    LABEL: "Summoner",
    DANGER: 8,
    SHAPE: 4,
    COLOR: 13,
    SIZE: 26,
    MAX_CHILDREN: 28,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: {
        FOV: 0.5,
        SPEED: 0.1 * base.SPEED,
        HEALTH: 7 * base.HEALTH,
        DAMAGE: 2.6 * base.DAMAGE,
    },

    GUNS: Array(4).fill().map((_, i) => ({
        POSITION: [3.5, 8.65, 1.2, 8, 0, i * 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.8 }]),
            TYPE: ["sunchip"],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true,
        },
    }))
};
exports.dorito = {
    PARENT: ["sunchip"],
    NECRO: [3],
    SHAPE: 3
};
exports.enchantress = {
    PARENT: ["miniboss"],
    LABEL: "Enchantress",
    DANGER: 8,
    SHAPE: 3.5,
    COLOR: 2,
    SIZE: 26,
    MAX_CHILDREN: 28,
    FACING_TYPE: "autospin",
    VALUE: 4e5,
    BODY: {
        FOV: 0.5,
        SPEED: 0.09 * base.SPEED,
        HEALTH: 10 * base.HEALTH,
        DAMAGE: 3 * base.DAMAGE,
    },
    GUNS: Array(3).fill().map((_, i) => ({
        POSITION: [3.5, 8.65, 1.2, 8, 0, i * 120, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.9 }]),
            TYPE: "dorito",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true,
        },
    }))
};
exports.demonchip = {
    PARENT: ["sunchip"],
    NECRO: [5],
    SHAPE: 5
};
exports.exorcistor = {
    PARENT: ["miniboss"],
    LABEL: "Exorcistor",
    DANGER: 8,
    SHAPE: 5.5,
    COLOR: 14,
    SIZE: 26,
    MAX_CHILDREN: 20,
    FACING_TYPE: "autospin",
    VALUE: 5e5,
    BODY: {
        FOV: 0.5,
        SPEED: 0.08 * base.SPEED,
        HEALTH: 15 * base.HEALTH,
        DAMAGE: 4 * base.DAMAGE,
    },
    GUNS: Array(5).fill().map((_, i) => ({
        POSITION: [3.5, 8.65, 1.2, 8, 0, i * 72, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy]),
            TYPE: "demonchip",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true,
        },
    }))
};
exports.eliteSkimmer = {
    PARENT: ["elite"],
    LABEL: "Elite Skimmer",
    COLOR: 2,
    TURRETS: [
        {
            POSITION: [15, 5, 0, 60, 170, 0],
            TYPE: "skimmerTurret",
        },
        {
            POSITION: [15, 5, 0, 180, 170, 0],
            TYPE: "skimmerTurret",
        },
        {
            POSITION: [15, 5, 0, 300, 170, 0],
            TYPE: "skimmerTurret",
        },
    ],
};

// Nesters
exports.nestKeeper = {
    PARENT: ["miniboss"],
    LABEL: "Nest Keeper",
    COLOR: 14,
    SHAPE: 5,
    SIZE: 50,
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 9,
        SHIELD: base.SHIELD * 1.5,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
    },
    MAX_CHILDREN: 15,
    GUNS: [
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, 35, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: "drone",
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, -35, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: "drone",
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: "drone",
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, 108, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: "drone",
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, -108, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: "drone",
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [8, 9, 0, 72, 120, 0],
            TYPE: [
                "auto4gun",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [8, 9, 0, 0, 120, 0],
            TYPE: [
                "auto4gun",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [8, 9, 0, 144, 120, 0],
            TYPE: [
                "auto4gun",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [8, 9, 0, 216, 120, 0],
            TYPE: [
                "auto4gun",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [8, 9, 0, -72, 120, 0],
            TYPE: [
                "auto4gun",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: [
                "boomerTurret",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
    ],
};
exports.nestWarden = {
    PARENT: ["miniboss"],
    LABEL: "Nest Warden",
    COLOR: 14,
    SHAPE: 5,
    SIZE: 50,
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 9,
        SHIELD: base.SHIELD * 1.5,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
    },
    GUNS: [],
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: [
                "barricadeTurret",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
    ],
};
for(let i = 0; i < 5; i++) {
    exports.nestWarden.GUNS.push(
        {
            POSITION: [10.7, 8, 1, 0, 0, 72*i+36, 0],
        },
        {
            POSITION: [1.5, 8, 1.2, 10.7, 0, 72*i+36, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.block, g.construct]),
                TYPE: "unsetTrap",
            },
        },
    );
    exports.nestWarden.TURRETS.push(
        {
            POSITION: [8, 9, 0, 72*i, 120, 0],
            TYPE: [
                "cruiserTurret",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        }
    );
};
exports.nestGuardian = {
    PARENT: ["miniboss"],
    LABEL: "Nest Guardian",
    COLOR: 14,
    SHAPE: 5,
    SIZE: 50,
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 9,
        SHIELD: base.SHIELD * 1.5,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
    },
    GUNS: [],
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: [
                "twisterTurret",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
    ],
};
for(let i = 0; i < 5; i++) {
    exports.nestGuardian.GUNS.push(
        {
            POSITION: [5.5, 7, 1, 6, 0, 72*i+36, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
                TYPE: "bullet",
                LABEL: "Devastator",
            },
        },
    );
    exports.nestGuardian.TURRETS.push(
        {
            POSITION: [8, 9, 0, 72*i, 120, 0],
            TYPE: [
                "swarmerTurret",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        }
    );
};

// Rogues
exports.roguePalisade = {
    PARENT: ["miniboss"],
    LABEL: "Rogue Palisade",
    COLOR: 17,
    SHAPE: 6,
    SIZE: 30,
    VALUE: 5e5,
    CONTROLLERS: ['nearestDifferentMaster', 'onlyAcceptInArc'],
    BODY: {
        FOV: 1.4,
        SPEED: 0.05 * base.SPEED,
        HEALTH: 16 * base.HEALTH,
        SHIELD: 3 * base.SHIELD,
        DAMAGE: 3 * base.DAMAGE,
    },
    GUNS: [
        { POSITION: [4, 6, -1.6, 8, 0, 0, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: ["minion", {INDEPENDENT: true}], STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 3, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
        { POSITION: [4, 6, -1.6, 8, 0, 60, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: ["minion", {INDEPENDENT: true}], STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 3, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
        { POSITION: [4, 6, -1.6, 8, 0, 120, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: ["minion", {INDEPENDENT: true}], STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 3, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
        { POSITION: [4, 6, -1.6, 8, 0, 180, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: ["minion", {INDEPENDENT: true}], STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 3, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
        { POSITION: [4, 6, -1.6, 8, 0, 240, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: ["minion", {INDEPENDENT: true}], STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 3, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
        { POSITION: [4, 6, -1.6, 8, 0, 300, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: ["minion", {INDEPENDENT: true}], STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 3, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
    ],
    TURRETS: [
        { POSITION: [5, 10, 0, 30, 110, 0], TYPE: "baseTrapTurret" },
        { POSITION: [5, 10, 0, 90, 110, 0], TYPE: "baseTrapTurret" },
        { POSITION: [5, 10, 0, 150, 110, 0], TYPE: "baseTrapTurret" },
        { POSITION: [5, 10, 0, 210, 110, 0], TYPE: "baseTrapTurret" },
        { POSITION: [5, 10, 0, 270, 110, 0], TYPE: "baseTrapTurret" },
        { POSITION: [5, 10, 0, 330, 110, 0], TYPE: "baseTrapTurret" },
    ],
};
exports.rogueArmada = (() => {
    let SHAPE = 7,
        GUNS = [],
        TURRETS = [];
    for (let i = 0; i < SHAPE; i++) {
        for (let j = 0; j < 8; j++) {
            GUNS.push({
                POSITION: [8, 2 + Math.floor(j / 3), 1, 0, j / 2 - 2, (i + 0.5) * (360 / SHAPE), 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, {damage: 3}]),
                    TYPE: j % SHAPE < 2 ? "bullet" : "casing"
                }
            });
        }
        GUNS.push({
            POSITION: [8.5, 6, 1, 4, 0, (i + 0.5) * (360 / SHAPE), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
                TYPE: "casing"
            }
        }, {
            POSITION: [7, 6, -1.6, 4, 0, (i + 0.5) * (360 / SHAPE), 0]
        });
    }
    for (let i = 0; i < SHAPE; i++) {
        TURRETS.push({
            POSITION: [5, 10, 0, i * 360 / SHAPE, 160, 0],
            TYPE: "shottrapTurret"
        });
    }
    return {
        PARENT: ["miniboss"],
        LABEL: 'Rogue Armada',
        COLOR: 17,
        SHAPE,
        SIZE: 28,
        VALUE: 500000,
        BODY: {
            FOV: 1.3,
            SPEED: base.SPEED * 0.1,
            HEALTH: base.HEALTH * 16,
            SHIELD: base.SHIELD * 3,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 3,
        },
        GUNS, TURRETS
    };
})();

// WINTER MAYHEM STRANGE BOSSES
exports.pumpkinEmperor = {
    PARENT: ["nestKeeper"],
    LABEL: "Pumpkin Emperor",
    NAME: "Jack Skeleton",
    COLOR: 40,
    BODY: {
        SPEED: base.SPEED * 0.5,
    },
};

// DIEP BOSSES
exports.guardianOfThePentagons = {
    PARENT: ["elite"],
    LABEL: "Guardian",
    FACING_TYPE: "toTarget",
    GUNS: [
        {
            POSITION: [4, 12, 1.4, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.celeslower]),
                TYPE: "swarm",
                AUTOFIRE: true,
            },
        },
    ],
    AI: {
        NO_LEAD: false,
    },
};
exports.defender = {
    PARENT: ["elite"],
    LABEL: "Defender",
    COLOR: 2,
    GUNS: [
        {
            POSITION: [15, 7, 1, -3, 0, 60, 0],
        },
        {
            POSITION: [3, 7, 1.7, 12, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, -3, 0, 180, 0],
        },
        {
            POSITION: [3, 7, 1.7, 12, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, -3, 0, 300, 0],
        },
        {
            POSITION: [3, 7, 1.7, 12, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [5, 7, 0, 0, 190, 1],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [5, 7, 0, 120, 190, 1],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [5, 7, 0, 240, 190, 1],
            TYPE: "autoTankGun",
        },
    ],
    AI: {
        NO_LEAD: false,
    },
};

// CELESTIALS
exports.terrestrial = {
    PARENT: ["miniboss"],
    LABEL: "Terrestrial",
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    VALUE: 5e5,
    SHAPE: 7,
    SIZE: 35,
    BODY: {
        FOV: 1,
        HEALTH: 1000,
        SHIELD: 2,
        REGEN: base.REGEN * 0.1,
        SPEED: 0.75,
        DAMAGE: 9,
    },
};
exports.celestial = {
    PARENT: ["miniboss"],
    LABEL: "Celestial",
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    VALUE: 1e6,
    SHAPE: 9,
    SIZE: 45,
    BODY: {
        FOV: 1,
        HEALTH: 1000,
        SHIELD: 2,
        REGEN: base.REGEN * 0.1,
        SPEED: 0.75,
        DAMAGE: 12,
    },
};
exports.rogueCelestial = {
    PARENT: ["celestial"],
    LABEL: "Rogue Celestial",
    COLOR: 17,
};
exports.eternal = {
    PARENT: ["miniboss"],
    LABEL: "Eternal",
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    VALUE: 4e6,
    SHAPE: 11,
    SIZE: 90,
    BODY: {
        FOV: 1,
        HEALTH: 3000,
        SHIELD: 2,
        REGEN: base.REGEN * 0.1,
        SPEED: 0.75,
        DAMAGE: 18,
    },
};

// Terrestrials
exports.protoHive = {
    PARENT: ["bullet"],
    LABEL: "Proto-Hive",
    BODY: {
        RANGE: 90,
        FOV: 0.5,
    },
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: true,
    CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
    AI: {
        NO_LEAD: true,
    },
    GUNS: [
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: ["bee", { INDEPENDENT: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 120, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: ["bee", { INDEPENDENT: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, -120, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: ["bee", { INDEPENDENT: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.protoSwarmerTurret = {
    PARENT: ["genericTank"],
    LABEL: "Swarmer",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [10, 14, -1.2, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
                TYPE: "protoHive",
            },
        },
        {
            POSITION: [11, 12, 1, 5, 0, 0, 0],
        },
    ],
};
exports.aresLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 14,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    INDEPENDENT: true,
    BODY: {
        FOV: 10,
    },
    MAX_CHILDREN: 18,
    FACING_TYPE: "autospin",
    GUNS: [],
};
for(let i = 0; i < 7; i++) {
    exports.aresLowerBody.GUNS.push(
        {
            POSITION: [3.75, 7, 1.2, 8, 0, 360/7*(i+0.5), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy, g.halfspeed]),
                TYPE: ["demonchip", { INDEPENDENT: true, }],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
                WAIT_TO_CYCLE: true,
            },
        },
    )
};
exports.aresUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 14,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [],
};
for(let i = 0; i < 5; i++) {
    exports.aresUpperBody.TURRETS.push(
        {
            POSITION: [10, 8.5, 0, 360/5*(i+0.5), 160, 0],
            TYPE: ["protoSwarmerTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.ares = {
    PARENT: ["terrestrial"],
    NAME: "Ares",
    UPGRADE_LABEL: "Ares",
    COLOR: 14,
    TURRETS: [
        {
            POSITION: [14.5, 0, 0, 0, 360, 1],
            TYPE: ["aresLowerBody"],
        },
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: ["aresUpperBody"],
        },
    ],
};
for(let i = 0; i < 7; i++) {
    exports.ares.TURRETS.push(
        {
            POSITION: [7, 9, 0, 360/7*(i+0.5), 180, 0],
            TYPE: ["terrestrialTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

exports.swarmTurret = {
    PARENT: ["genericTank"],
    LABEL: "Swarm",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: ["swarm", {INDEPENDENT: true}],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.basicTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [16, 4, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.gersemiLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 1,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 5,
    INDEPENDENT: true,
    BODY: {
        FOV: 10,
    },
    MAX_CHILDREN: 18,
    FACING_TYPE: "autospin",
    TURRETS: [],
};
for(let i = 0; i < 5; i++) {
    exports.gersemiLowerBody.TURRETS.push(
        {
            POSITION: [9, 8, 0, 360/5*(i+0.5), 160, 0],
            TYPE: ["swarmTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.gersemiUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 1,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 3,
    INDEPENDENT: true,
    TURRETS: [],
};
for(let i = 0; i < 3; i++) {
    exports.gersemiUpperBody.TURRETS.push(
        {
            POSITION: [9.5, 7.5, 0, 360/3*(i+0.5), 160, 0],
            TYPE: ["basicTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.gersemi = {
    PARENT: ["terrestrial"],
    NAME: "Gersemi",
    UPGRADE_LABEL: "Gersemi",
    COLOR: 1,
    TURRETS: [
        {
            POSITION: [14.5, 0, 0, 0, 360, 1],
            TYPE: ["gersemiLowerBody"],
        },
        {
            POSITION: [8.5, 0, 0, 0, 360, 1],
            TYPE: ["gersemiUpperBody"],
        },
    ],
};
for(let i = 0; i < 7; i++) {
    exports.gersemi.TURRETS.push(
        {
            POSITION: [7, 9, 0, 360/7*(i+0.5), 180, 0],
            TYPE: ["terrestrialTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

exports.ezekielLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 2,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 5,
    INDEPENDENT: true,
    BODY: {
        FOV: 10,
    },
    MAX_CHILDREN: 18,
    FACING_TYPE: "autospin",
    GUNS: [],
};
for(let i = 0; i < 5; i++) {
    exports.ezekielLowerBody.GUNS.push(
        {
            POSITION: [3.75, 7, 1.2, 8, 0, 360/5*(i+0.5), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy, g.halfspeed]),
                TYPE: ["dorito", { COLOR: 2, INDEPENDENT: true, }],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
                WAIT_TO_CYCLE: true,
            },
        },
    )
};
exports.ezekielUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 2,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 3,
    INDEPENDENT: true,
    TURRETS: [],
};
for(let i = 0; i < 3; i++) {
    exports.ezekielUpperBody.TURRETS.push(
        {
            POSITION: [10, 7.5, 0, 360/3*(i+0.5), 160, 0],
            TYPE: ["zaphkielSkimmerTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.ezekiel = {
    PARENT: ["terrestrial"],
    NAME: "Ezekiel",
    UPGRADE_LABEL: "Ezekiel",
    COLOR: 2,
    TURRETS: [
        {
            POSITION: [14.5, 0, 0, 0, 360, 1],
            TYPE: ["ezekielLowerBody"],
        },
        {
            POSITION: [8.5, 0, 0, 0, 360, 1],
            TYPE: ["ezekielUpperBody"],
        },
    ],
};
for(let i = 0; i < 7; i++) {
    exports.ezekiel.TURRETS.push(
        {
            POSITION: [7, 9, 0, 360/7*(i+0.5), 180, 0],
            TYPE: ["terrestrialTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

exports.erisLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 5,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    BODY: {
        FOV: 100,
    },
    MAX_CHILDREN: 14,
    INDEPENDENT: true,
    FACING_TYPE: "autospin",
    GUNS: [],
};
for(let i = 0; i < 7; i++) {
    exports.erisLowerBody.GUNS.push(
        {
            POSITION: [3.75, 7, 1.2, 8, 0, 360/7*(i+0.5), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: ["minion", { INDEPENDENT: true, COLOR: 5, HAS_NO_RECOIL: true, }],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
                WAIT_TO_CYCLE: true,
            },
        },
    )
};
exports.erisUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 5,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [],
};
for(let i = 0; i < 5; i++) {
    exports.erisUpperBody.TURRETS.push(
        {
            POSITION: [10, 8.5, 0, 360/5*(i+0.5), 160, 0],
            TYPE: ["rocketeerTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.eris = {
    PARENT: ["terrestrial"],
    NAME: "Eris",
    UPGRADE_LABEL: "Eris",
    COLOR: 5,
    TURRETS: [
        {
            POSITION: [14.5, 0, 0, 0, 360, 1],
            TYPE: ["erisLowerBody"],
        },
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: ["erisUpperBody"],
        },
    ],
};
for(let i = 0; i < 7; i++) {
    exports.eris.TURRETS.push(
        {
            POSITION: [7, 9, 0, 360/7*(i+0.5), 180, 0],
            TYPE: ["terrestrialTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

exports.seleneLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 13,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 5,
    INDEPENDENT: true,
    BODY: {
        FOV: 10,
    },
    MAX_CHILDREN: 18,
    FACING_TYPE: "autospin",
    GUNS: [],
};
for(let i = 0; i < 5; i++) {
    exports.seleneLowerBody.GUNS.push(
        {
            POSITION: [3.75, 7, 1.2, 8, 0, 360/5*(i+0.5), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy, g.halfspeed]),
                TYPE: ["sunchip", { COLOR: 13, INDEPENDENT: true, }],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
                WAIT_TO_CYCLE: true,
            },
        },
    )
};
exports.seleneUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 13,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 3,
    INDEPENDENT: true,
    TURRETS: [],
};
for(let i = 0; i < 3; i++) {
    exports.seleneUpperBody.TURRETS.push(
        {
            POSITION: [10, 7.5, 0, 360/3*(i+0.5), 160, 0],
            TYPE: ["hyperTwisterTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.selene = {
    PARENT: ["terrestrial"],
    NAME: "Selene",
    UPGRADE_LABEL: "Selene",
    COLOR: 13,
    TURRETS: [
        {
            POSITION: [14.5, 0, 0, 0, 360, 1],
            TYPE: ["seleneLowerBody"],
        },
        {
            POSITION: [8.5, 0, 0, 0, 360, 1],
            TYPE: ["seleneUpperBody"],
        },
    ],
};
for(let i = 0; i < 7; i++) {
    exports.selene.TURRETS.push(
        {
            POSITION: [7, 9, 0, 360/7*(i+0.5), 180, 0],
            TYPE: ["terrestrialTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

// PALADIN
exports.swarmerTurret = {
    PARENT: ["genericTank"],
    LABEL: "Swarmer",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [14, 14, -1.2, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
                TYPE: "hive",
            },
        },
        {
            POSITION: [15, 12, 1, 5, 0, 0, 0],
        },
    ],
};
exports.paladinLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 14,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    MAX_CHILDREN: 16,
    FACING_TYPE: "autospin",
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 26, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["demonchip", {INDEPENDENT: true}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 77, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["demonchip", {INDEPENDENT: true}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 129, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["demonchip", {INDEPENDENT: true}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["demonchip", {INDEPENDENT: true}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 231, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["demonchip", {INDEPENDENT: true}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 282, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["demonchip", {INDEPENDENT: true}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 333, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["demonchip", {INDEPENDENT: true}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
    ],
};
exports.paladinUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 14,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [10, 7.5, 0, 35, 160, 0],
            TYPE: ["swarmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 110, 160, 0],
            TYPE: ["swarmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 180, 160, 0],
            TYPE: ["swarmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 252, 160, 0],
            TYPE: ["swarmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 325, 160, 0],
            TYPE: ["swarmerTurret"],
        },
    ],
};
exports.paladin = {
    PARENT: ["celestial"],
    NAME: "Paladin",
    UPGRADE_LABEL: "Paladin",
    COLOR: 14,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [14.94, 0, 0, 0, 360, 1],
            TYPE: ["paladinLowerBody"],
        },
        {
            POSITION: [8.6, 0, 0, 0, 360, 1],
            TYPE: ["paladinUpperBody"],
        },
    ],
};

// FREYJA
exports.cruiserTurret = {
    PARENT: ["genericTank"],
    LABEL: "Cruiser",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.freyjaLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 1,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 7,
    INDEPENDENT: true,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            //*********    SIZE         X             Y         ANGLE        ARC
            POSITION: [8.5, 9, 0, 26, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 77, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 129, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 180, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 231, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 282, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 333, 180, 0],
            TYPE: ["cruiserTurret"],
        },
    ],
};
exports.freyjaUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 1,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            //**     SIZE         X             Y         ANGLE        ARC
            POSITION: [10.6, 7.5, 0, 35, 160, 0],
            TYPE: ["auto4gun"],
        },
        {
            POSITION: [10.6, 7.5, 0, 110, 160, 0],
            TYPE: ["auto4gun"],
        },
        {
            POSITION: [10.6, 7.5, 0, 180, 160, 0],
            TYPE: ["auto4gun"],
        },
        {
            POSITION: [10.6, 7.5, 0, 252, 160, 0],
            TYPE: ["auto4gun"],
        },
        {
            POSITION: [10.6, 7.5, 0, 325, 160, 0],
            TYPE: ["auto4gun"],
        },
    ],
};
exports.freyja = {
    PARENT: ["celestial"],
    NAME: "Freyja",
    UPGRADE_LABEL: "Freyja",
    COLOR: 1,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [14.77, 0, 0, 0, 360, 1],
            TYPE: ["freyjaLowerBody"],
        },
        {
            POSITION: [8.7, 0, 0, 0, 360, 1],
            TYPE: ["freyjaUpperBody"],
        },
    ],
};

// ZAPHKIEL
exports.zaphkielSkimmerTurret = {
    PARENT: ["skimmerTurret"],
    COLOR: 16,
};
exports.zaphkielLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 2,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    MAX_CHILDREN: 16,
    FACING_TYPE: "autospin",
    GUNS: [
        {
            //*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY
            POSITION: [3.6, 6, 1.4, 8, 0, 26, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["drone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 77, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["drone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 129, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["drone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["drone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 231, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["drone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 282, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["drone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 333, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["drone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
    ],
};
exports.zaphkielUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 2,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [10, 7.5, 0, 35, 160, 0],
            TYPE: ["zaphkielSkimmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 110, 160, 0],
            TYPE: ["zaphkielSkimmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 180, 160, 0],
            TYPE: ["zaphkielSkimmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 252, 160, 0],
            TYPE: ["zaphkielSkimmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 325, 160, 0],
            TYPE: ["zaphkielSkimmerTurret"],
        },
    ],
};
exports.zaphkiel = {
    PARENT: ["celestial"],
    NAME: "Zaphkiel",
    UPGRADE_LABEL: "Zaphkiel",
    COLOR: 2,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [14.94, 0, 0, 0, 360, 1],
            TYPE: "zaphkielLowerBody",
        },
        {
            POSITION: [8.6, 0, 0, 0, 360, 1],
            TYPE: "zaphkielUpperBody",
        },
    ],
};

// NYX
exports.rocketeerTurret = {
    PARENT: ["genericTank"],
    LABEL: "Rocketeer",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [10, 12.5, -0.7, 10, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.launcher,
                    g.rocketeer,
                ]),
                TYPE: "rocketeerMissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
        {
            POSITION: [17, 18, 0.65, 0, 0, 0, 0],
        },
    ],
};
exports.nyxLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 5,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    FACING_TYPE: "autospin",
    INDEPENDENT: true,
    MAX_CHILDREN: 16,
    GUNS: [
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 26, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: ["minion", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 77, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: ["minion", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 129, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: ["minion", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: ["minion", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 231, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: ["minion", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 282, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: ["minion", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 333, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: ["minion", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
    ],
};
exports.nyxUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 5,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [10, 7.5, 0, 35, 160, 0],
            TYPE: ["rocketeerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 110, 160, 0],
            TYPE: ["rocketeerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 180, 160, 0],
            TYPE: ["rocketeerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 252, 160, 0],
            TYPE: ["rocketeerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 325, 160, 0],
            TYPE: ["rocketeerTurret"],
        },
    ],
};
exports.nyx = {
    PARENT: ["celestial"],
    NAME: "Nyx",
    UPGRADE_LABEL: "Nyx",
    COLOR: 5,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [14.94, 0, 0, 0, 360, 1],
            TYPE: ["nyxLowerBody"],
        },
        {
            POSITION: [8.6, 0, 0, 0, 360, 1],
            TYPE: ["nyxUpperBody"],
        },
    ],
};

// THEIA
exports.theiaTwisterTurret = {
    PARENT: ["twisterTurret"],
    COLOR: 16,
};
exports.theiaLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 13,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    FACING_TYPE: "autospin",
    MAX_CHILDREN: 35,
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 26, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: ["summonerDrone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 77, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: ["summonerDrone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 129, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: ["summonerDrone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 180, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: ["summonerDrone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 231, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: ["summonerDrone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 282, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: ["summonerDrone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 333, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: ["summonerDrone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
    ],
};
exports.theiaUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 13,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [10, 7.5, 0, 35, 160, 0],
            TYPE: "theiaTwisterTurret",
        },
        {
            POSITION: [10, 7.5, 0, 110, 160, 0],
            TYPE: "theiaTwisterTurret",
        },
        {
            POSITION: [10, 7.5, 0, 180, 160, 0],
            TYPE: "theiaTwisterTurret",
        },
        {
            POSITION: [10, 7.5, 0, 252, 160, 0],
            TYPE: "theiaTwisterTurret",
        },
        {
            POSITION: [10, 7.5, 0, 325, 160, 0],
            TYPE: "theiaTwisterTurret",
        },
    ],
};
exports.theia = {
    PARENT: ["celestial"],
    NAME: "Theia",
    UPGRADE_LABEL: "Theia",
    COLOR: 13,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [14.94, 0, 0, 0, 360, 1],
            TYPE: ["theiaLowerBody"],
        },
        {
            POSITION: [8.6, 0, 0, 0, 360, 1],
            TYPE: ["theiaUpperBody"],
        },
    ],
};

// ALVISS
exports.alvissDrone = {
    PARENT: ["eggchip"],
    NECRO: false,
};
exports.launcherTurret = {
    PARENT: ["genericTank"],
    LABEL: "Launcher",
    BODY: {
        FOV: 2 * base.FOV,
    },
    COLOR: 16,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [10, 9, 1, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty]),
                TYPE: "minimissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.alvissLowerTurret = {
    PARENT: ["genericTank"],
    LABEL: "",
    MAX_CHILDREN: 3,
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [8.5, 11, 0.6, 6, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.sunchip]),
                TYPE: "alvissDrone",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.alvissLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 17,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    FACING_TYPE: "autospin",
    MAX_CHILDREN: 24,
    TURRETS: [
        {
            //*********    SIZE         X             Y         ANGLE        ARC
            POSITION: [8.5, 9, 0, 26, 180, 0],
            TYPE: ["alvissLowerTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 77, 180, 0],
            TYPE: ["alvissLowerTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 129, 180, 0],
            TYPE: ["alvissLowerTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 180, 180, 0],
            TYPE: ["alvissLowerTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 231, 180, 0],
            TYPE: ["alvissLowerTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 282, 180, 0],
            TYPE: ["alvissLowerTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 333, 180, 0],
            TYPE: ["alvissLowerTurret"],
        },
    ],
};
exports.alvissUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 17,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            //**     SIZE         X             Y         ANGLE        ARC
            POSITION: [10.6, 7.5, 0, 35, 160, 0],
            TYPE: ["launcherTurret"],
        },
        {
            POSITION: [10.6, 7.5, 0, 110, 160, 0],
            TYPE: ["launcherTurret"],
        },
        {
            POSITION: [10.6, 7.5, 0, 180, 160, 0],
            TYPE: ["launcherTurret"],
        },
        {
            POSITION: [10.6, 7.5, 0, 252, 160, 0],
            TYPE: ["launcherTurret"],
        },
        {
            POSITION: [10.6, 7.5, 0, 325, 160, 0],
            TYPE: ["launcherTurret"],
        },
    ],
};
exports.alviss = {
    PARENT: ["rogueCelestial"],
    NAME: "Alviss",
    UPGRADE_LABEL: "Alviss",
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [14.94, 0, 0, 0, 360, 1],
            TYPE: ["alvissLowerBody"],
        },
        {
            POSITION: [8.6, 0, 0, 0, 360, 1],
            TYPE: ["alvissUpperBody"],
        },
    ],
};

// TYR
exports.tyrLowerTurret = {
    PARENT: ["genericTank"],
    LABEL: "",
    MAX_CHILDREN: 4,
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [8.5, 11, 0.6, 6, 0, 0, 0.5],
        },
        {
            POSITION: [3.4, 14, 1, 14.3, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.babyfactory, g.lessreload]),
                TYPE: ["tinyMinion", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
    ],
};
exports.tyrLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 17,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    FACING_TYPE: "autospin",
    MAX_CHILDREN: 23,
    TURRETS: [{ //*********    SIZE         X             Y         ANGLE        ARC
        POSITION: [8.5, 9, 0, 26, 180, 0],
        TYPE: ["tyrLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 77, 180, 0],
        TYPE: ["tyrLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 129, 180, 0],
        TYPE: ["tyrLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 180, 180, 0],
        TYPE: ["tyrLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 231, 180, 0],
        TYPE: ["tyrLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 282, 180, 0],
        TYPE: ["tyrLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 333, 180, 0],
        TYPE: ["tyrLowerTurret"],
    }]
};
exports.tyrUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 17,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [{ //**     SIZE         X             Y         ANGLE        ARC
        POSITION: [10.6, 7.5, 0, 35, 160, 0],
        TYPE: ["auto4gun"],
    },{
        POSITION: [10.6, 7.5, 0, 110, 160, 0],
        TYPE: ["auto4gun"],
    },{
        POSITION: [10.6, 7.5, 0, 180, 160, 0],
        TYPE: ["auto4gun"],
    },{
        POSITION: [10.6, 7.5, 0, 252, 160, 0],
        TYPE: ["auto4gun"],
    },{
        POSITION: [10.6, 7.5, 0, 325, 160, 0],
        TYPE: ["auto4gun"],
    }]
};
exports.tyr = {
    PARENT: ["rogueCelestial"],
    NAME: "Tyr",
    UPGRADE_LABEL: "Tyr",
    TURRETS: [{ /*********    SIZE         X             Y         ANGLE        ARC */
        POSITION: [6.5, 9, 0, 260, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 219, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 180, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 300, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 339, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 380, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 420, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 459, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 500, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [14.94, 0, 0, 0, 360, 1],
        TYPE: ["tyrLowerBody"],
    },{
        POSITION: [8.6, 0, 0, 0, 360, 1],
        TYPE: ["tyrUpperBody"],
    }]
};

// Fiolnir
exports.fiolnirLowerTurret = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [7, 8, 0.6, 6, 0, 30, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.pound, g.morespeed]),
                TYPE: ["bee", { INDEPENDENT: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 6, 0, -30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.pound, g.morespeed]),
                TYPE: ["bee", { INDEPENDENT: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.fiolnirLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 17,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    FACING_TYPE: "autospin",
    MAX_CHILDREN: 23,
    TURRETS: [{ //*********    SIZE         X             Y         ANGLE        ARC
        POSITION: [8.5, 9, 0, 26, 180, 0],
        TYPE: ["fiolnirLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 77, 180, 0],
        TYPE: ["fiolnirLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 129, 180, 0],
        TYPE: ["fiolnirLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 180, 180, 0],
        TYPE: ["fiolnirLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 231, 180, 0],
        TYPE: ["fiolnirLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 282, 180, 0],
        TYPE: ["fiolnirLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 333, 180, 0],
        TYPE: ["fiolnirLowerTurret"],
    }]
};
exports.turretedBullet = makeAuto(bullet, "Auto-Bullet", {size: 14, color: 6, angle: 0});
exports.fiolnirUpperTurret = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [12, 16, -0.6, 0, 0, 0, 0],
        },
        {
            POSITION: [15, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.bitlessspeed]),
                TYPE: ["turretedBullet", {COLOR: 6}],
            },
        },
    ],
};
exports.fiolnirUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 17,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [{ //**     SIZE         X             Y         ANGLE        ARC
        POSITION: [10.6, 7.5, 0, 35, 160, 0],
        TYPE: ["fiolnirUpperTurret"],
    },{
        POSITION: [10.6, 7.5, 0, 110, 160, 0],
        TYPE: ["fiolnirUpperTurret"],
    },{
        POSITION: [10.6, 7.5, 0, 180, 160, 0],
        TYPE: ["fiolnirUpperTurret"],
    },{
        POSITION: [10.6, 7.5, 0, 252, 160, 0],
        TYPE: ["fiolnirUpperTurret"],
    },{
        POSITION: [10.6, 7.5, 0, 325, 160, 0],
        TYPE: ["fiolnirUpperTurret"],
    }]
};
exports.fiolnir = {
    PARENT: ["rogueCelestial"],
    NAME: "Fiolnir",
    UPGRADE_LABEL: "Fiolnir",
    TURRETS: [{ /*********    SIZE         X             Y         ANGLE        ARC */
        POSITION: [6.5, 9, 0, 260, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 219, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 180, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 300, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 339, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 380, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 420, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 459, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 500, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [14.5, 0, 0, 0, 360, 1],
        TYPE: ["fiolnirLowerBody"],
    },{
        POSITION: [8.6, 0, 0, 0, 360, 1],
        TYPE: ["fiolnirUpperBody"],
    }]
};

// Eternals
exports.kronosMissile = {
    PARENT: ["missile"],
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, -2, 150, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 6, 1, 0, 2, 210, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [3, 7, 1, 11, -2, 90, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.trap,
                    g.halfrange,
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ]),
                TYPE: [
                    "trap",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
            },
        },
        {
            POSITION: [11, 6, 1, 0, -2, 90, 0.5],
        },
        {
            POSITION: [3, 7, 1, 11, 2, -90, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.trap,
                    g.halfrange,
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ]),
                TYPE: [
                    "trap",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
            },
        },
        {
            POSITION: [11, 6, 1, 0, 2, -90, 0.5],
        },
    ],
};
exports.kronosSkimmerTurret = {
    PARENT: ["genericTank"],
    LABEL: "Skimmer",
    BODY: {
        FOV: 10,
    },
    COLOR: 16,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            POSITION: [8, 20, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [13, 18, -0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                    g.halfreload,
                ]),
                TYPE: "kronosMissile",
            },
        },
    ],
};
exports.carrierTurret = {
    PARENT: ["genericTank"],
    LABEL: "Carrier",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 8, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound, g.morespeed]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, 2, 30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound, g.morespeed]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, -2, -30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound, g.morespeed]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.tripletTurret = {
    PARENT: ["genericTank"],
    LABEL: "Triplet",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [18, 10, 1, 0, 5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 10, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 10, 1.2, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.kronosBottomBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.01 }]],
    COLOR: 6,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 9,
    FOV: 10,
    TURRETS: [],
};
for(let i = 0; i < 9; i++) {
    exports.kronosBottomBody.TURRETS.push(
        {
            POSITION: [6.5, 9, 0, 360/9*(i+0.5), 160, 0],
            TYPE: ["kronosSkimmerTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.kronosMiddleBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 6,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    TURRETS: [],
};
for(let i = 0; i < 7; i++) {
    exports.kronosMiddleBody.TURRETS.push(
        {
            POSITION: [8, 8.5, 0, 360/7*(i+0.5), 160, 0],
            TYPE: ["carrierTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.kronosTopBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 6,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 5,
    FOV: 1,
    TURRETS: [],
};
for(let i = 0; i < 5; i++) {
    exports.kronosTopBody.TURRETS.push(
        {
            POSITION: [9.5, 9, 0, 360/5*(i+0.5), 160, 0],
            TYPE: ["tripletTurret", { INDEPENDENT: true, }],
        },
    )
};

exports.kronos = {
    PARENT: ["eternal"],
    NAME: "Kronos",
    UPGRADE_LABEL: "Kronos",
    COLOR: 6,
<<<<<<< Updated upstream
    BODY: { REGEN: base.REGEN * 0.3 },
=======
    ACCEPTS_SCORE: false,
>>>>>>> Stashed changes
    TURRETS: [
        {
            POSITION: [15.5, 0, 0, 0, 360, 1],
            TYPE: ["kronosBottomBody"],
        },
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: ["kronosMiddleBody"],
        },
        {
            POSITION: [6.5, 0, 0, 0, 360, 1],
            TYPE: ["kronosTopBody"],
        },
    ],
};
for(let i = 0; i < 11; i++) {
    exports.kronos.TURRETS.push(
        {
            POSITION: [6, 9, 0, 360/11*(i+0.5), 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

exports.autoSmasherMissileTurret = {
    PARENT: ["auto4gun"],
    CONTROLLERS: ["nearestDifferentMaster"],
};
exports.autoSmasherMissile = {
    PARENT: ["missile"],
    LABEL: "Auto-Smasher",
    HITS_OWN_TYPE: "never",
    DANGER: 6,
    BODY: {
        FOV: 1.05 * base.FOV,
        DENSITY: 2 * base.DENSITY,
    },
    GUNS: [],
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: ["auto4gun", { INDEPENDENT: true }],
        },
    ],
}
exports.autosmashTurret = {
    PARENT: ["genericTank"],
    LABEL: "Launcher",
    BODY: {
        FOV: 10,
    },
    COLOR: 16,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            POSITION: [3, 10, 1.2, 15, 0, 0, 0],
        },
        {
            POSITION: [16, 18, -0.7, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                    g.halfreload,
                    g.morespeed,
                    g.morespeed,
                    //g.morespeed,
                    {range: 2.5},
                ]),
                TYPE: "autoSmasherMissile",
            },
        },
    ],
};
exports.gunnerCruiserTurret = {
    PARENT: ["genericTank"],
    LABEL: "Launcher",
    BODY: {
        FOV: 10,
    },
    COLOR: 16,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            POSITION: [6, 7.5, 0.6, 6, 4.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [6, 7.5, 0.6, 6, -4.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [18, 3, 1, 0, -3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.tonsmorrecoil,
                    g.lotsmorrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 3, 1, 0, 3, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.tonsmorrecoil,
                    g.lotsmorrecoil,
                ]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.gemDrone = {
    PARENT: ["drone"],
    COLOR: 0,
    DRAW_HEALTH: true,
    SHAPE: 6,
    INDEPENDENT: true,
    BODY: {
        PUSHABILITY: 0.3,
        HEALTH: 0.3*5,
        DAMAGE: 3.375/5,
        SPEED: 1,
        DENSITY: 0.1,
        RESIST: 3,
        FOV: 100,
    },
}
exports.ragnarokBottomBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.01 }]],
    COLOR: 0,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 9,
    FOV: 10,
    MAX_CHILDREN: 18,
    GUNS: [],
};
for(let i = 0; i < 9; i++) {
    exports.ragnarokBottomBody.GUNS.push(
        {
            POSITION: [2.5, 3, -1.8, 9, 0, 360/9*(i+0.5), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower, g.pound, {size: 1.7}]),
                TYPE: ["gemDrone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
    )
};
exports.ragnarokMiddleBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 0,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    TURRETS: [],
};
for(let i = 0; i < 7; i++) {
    exports.ragnarokMiddleBody.TURRETS.push(
        {
            POSITION: [7, 8.5, 0, 360/7*(i+0.5), 160, 0],
            TYPE: ["autosmashTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.ragnarokTopBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 0,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 5,
    FOV: 1,
    TURRETS: [],
};
for(let i = 0; i < 5; i++) {
    exports.ragnarokTopBody.TURRETS.push(
        {
            POSITION: [8.5, 9, 0, 360/5*(i+0.5), 160, 0],
            TYPE: ["gunnerCruiserTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.ragnarok = {
    PARENT: ["eternal"],
    NAME: "Ragnarok",
    UPGRADE_LABEL: "Ragnarok",
    COLOR: 0,
    TURRETS: [
        {
            POSITION: [15.5, 0, 0, 0, 360, 1],
            TYPE: ["ragnarokBottomBody"],
        },
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: ["ragnarokMiddleBody"],
        },
        {
            POSITION: [6.5, 0, 0, 0, 360, 1],
            TYPE: ["ragnarokTopBody"],
        },
    ],
};
for(let i = 0; i < 11; i++) {
    exports.ragnarok.TURRETS.push(
        {
            POSITION: [5, 8.5, 0, 360/11*(i+0.5), 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

// Developer Bosses
exports.taureonCoreBase = {
    SHAPE: 4,
    COLOR: '#00A2E8'
};
exports.taureonCore = {
    PARENT: "genericTank",
    LABEL: "Core Turret",
    SHAPE: 4.5,
    COLOR: '#99D9EA',
    INDEPENDENT: true,
    GUNS: [{
        POSITION: [10, 14, -0.5, 14, 0, 0, 0]
    },{
        POSITION: [21, 15, -1.1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.destroy, g.sniper]),
            TYPE: "snake",
            STAT_CALCULATOR: gunCalcNames.sustained
        }
    }],
    TURRETS: [{
        POSITION: [20 * Math.SQRT2, 0, 0, 0, 0, 0],
        TYPE: "taureonCoreBase"
    }]
};
exports.taureonBase = {
    SHAPE: 4.5,
    COLOR: '#161B54',
    MIRROR_MASTER_ANGLE: true
};
let d = 1/4;
exports.taureonStar = {
    SHAPE: [[0,1],[d,d],[1,0],[d,-d],[0,-1],[-d,-d],[-1,0],[-d,d]],
    COLOR: '#3F48CC',
    MIRROR_MASTER_ANGLE: true
};
exports.taureonRailgunTurret = {
    PARENT: "genericTank",
    LABEL: "Railgun Turret",
    CONTROLLERS: ["nearestDifferentMaster", "onlyAcceptInArc"],
    INDEPENDENT: true,
    GUNS: [{
        POSITION: [20, 7, 1, 0, 0, 0, 0]
    },{
        POSITION: [24, 5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.destroy, g.veryfast, g.veryfast]),
            TYPE: "bullet"
        }
    },{
        POSITION: [5, 7.5, -1.6, 8, 0, 0, 0],
    }]
};
exports.taureonThruster = {
    PARENT: "genericTank",
    LABEL: "Thruster",
    CONTROLLERS: ["onlyAcceptInArc"],
    GUNS: [{
        POSITION: [14, 12, 1, 4, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mach, g.thruster, g.halfspeed, g.halfspeed, g.fake]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [12, 12, 1.4, 4, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mach, g.thruster, g.halfspeed, g.halfspeed]),
            TYPE: "bullet"
        },
    }]
};
exports.taureonMissile = {
    PARENT: ["bullet"],
    LABEL: "Missile",
    TYPE: "swarm",
    MOTION_TYPE: "swarm",
    FACING_TYPE: "smoothWithMotion",
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    INDEPENDENT: true,
    BODY: {
        FOV: base.FOV * 2
    },
    TURRETS: [{/** SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: "genericTank",
    }],
    GUNS: [{/* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.4, 8, 0, 180, 0],
        PROPERTIES: {
            AUTOFIRE: true,
            STAT_CALCULATOR: gunCalcNames.thruster,
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, { range: 0.1 }]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
        }
    },{
        POSITION: [10, 12, 0.8, 8, 0, 180, 0.5],
        PROPERTIES: {
            AUTOFIRE: true,
            NEGATIVE_RECOIL: true,
            STAT_CALCULATOR: gunCalcNames.thruster,
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, { range: 0.1 }]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }]
        }
    },...Array(16).fill().map((_, i)=>({
        POSITION: [0, (i % 4) + 1, 0, 0, 0, 0, 9999],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, { spray: 1e6, recoil: 0, range: 0.5 }]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true
        },
    }))]
};
exports.taureonBoss = {
    PARENT: "miniboss",
    LABEL: "Diamond Marauder",
    NAME: "Taureon",
    COLOR: '#2B339B',
    DANGER: 10,
    SHAPE: 4.5,
    SIZE: 50,
    FACING_TYPE: "smoothToTarget",
    VALUE: 5e6,
    BODY: {
        FOV: 1,
        SPEED: 0.5 * base.SPEED,
        HEALTH: 20 * base.HEALTH,
        DAMAGE: 3 * base.DAMAGE,
    },
    TURRETS: [{
        POSITION: [23.3, 0, 0, 0, 0, 0],
        TYPE: "taureonBase"
    },{
        POSITION: [5, 10, 0, -45, 180, 0],
        TYPE: "taureonRailgunTurret"
    },{
        POSITION: [5, 10, 0, 45, 180, 0],
        TYPE: "taureonRailgunTurret"
    },{
        POSITION: [5, -10, 0, -45, 90, 0],
        TYPE: "taureonThruster"
    },{
        POSITION: [5, -10, 0, 45, 90, 0],
        TYPE: "taureonThruster"
    },{
        POSITION: [25, 0, 0, 0, 0, 1],
        TYPE: "taureonStar"
    },{
        POSITION: [5, 0, 0, 0, 0, 1],
        TYPE: "taureonCore"
    }],
    GUNS: [...Array(6).fill().map((_, i) => ({
        POSITION: [18, 1.75, 1, 0, Math.cos(Math.PI * i / 3) * 2, 0, i / 6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin]),
            TYPE: "bullet"
        }
    })),{
        POSITION: [4, 5, -0.5, 12, 0, -90, 0]
    },{
        POSITION: [10, 5, -1.2, 5, 0, -90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
            TYPE: "taureonMissile",
            STAT_CALCULATOR: gunCalcNames.sustained
        }
    },{
        POSITION: [4, 5, -0.5, 12, 0, 90, 0]
    },{
        POSITION: [10, 5, -1.2, 5, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
            TYPE: "taureonMissile",
            STAT_CALCULATOR: gunCalcNames.sustained
        }
    },{
        POSITION: [5.5, 5, -1.5, 5, 0, -45, 0]
    },{
        POSITION: [5.5, 5, -1.5, 5, 0, 45, 0]
    },{
        POSITION: [2, 7, 1, 8, 0, 0, 0]
    },{
        POSITION: [2, 7, 1, 14.5, 0, 0, 0]
    }]
};

exports.shinyomegasunchip = {
    PARENT: ["drone"],
    SHAPE: 4,
    HITS_OWN_TYPE: "hard",
    BODY: {
        FOV: 0.5,
    },
    AI: {
        BLIND: true,
        FARMER: true,
    },
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 45, 0, 1],
        TYPE: ["shinySquare", { MIRROR_MASTER_ANGLE: true }]
    },{
        POSITION: [20 * Math.SQRT1_2 ** 2, 0, 0, 0, 0, 1],
        TYPE: ["shinySquare", { MIRROR_MASTER_ANGLE: true }]
    },{
        POSITION: [20 * Math.SQRT1_2 ** 3, 0, 0, 45, 0, 1],
        TYPE: ["shinySquare", { MIRROR_MASTER_ANGLE: true }]
    }]
};
exports.shinyEggDummy = {
    SHAPE: 0,
    COLOR: 1
}
exports.shinybetawaferbread = {
    PARENT: ["drone"],
    SHAPE: 0,
    HITS_OWN_TYPE: "hard",
    BODY: {
        FOV: 0.5,
    },
    AI: {
        BLIND: true,
        FARMER: true,
    },
    TURRETS: [{
        POSITION: [10, 0, 0, 45, 0, 1],
        TYPE: "shinyEggDummy"
    },]
};;
exports.zenphiaBoss = {
    PARENT: "miniboss",
    LABEL: "Shiny Omega Thaumaturge",
    NAME: "Zenphia",
    DANGER: 10,
    SHAPE: 4,
    COLOR: 1,
    SIZE: 50,
    FACING_TYPE: "autospin",
    VALUE: 5e6,
    BODY: {
        FOV: 0.75,
        SPEED: 0.05 * base.SPEED,
        HEALTH: 15 * base.HEALTH,
        DAMAGE: 5 * base.DAMAGE,
    },
    GUNS: Array(4).fill().map((_, i) => ([{
        POSITION: [3.5, 8.65, 1.2, 8, 0, i * 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy, g.destroy, g.veryfast, { maxSpeed: 3 }]),
            TYPE: "shinyomegasunchip",
            MAX_CHILDREN: 4,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true
        }
    },{
        POSITION: [2.5, 3, 1.2, 8, 5, i * 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.pound, g.veryfast, g.mach, { spray: 50, speed: 1.25, shudder: 1.25 }]),
            TYPE: "shinybetawaferbread",
            MAX_CHILDREN: 8,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true
        }
    },{
        POSITION: [2.5, 3, 1.2, 8, -5, i * 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.pound, g.veryfast, g.mach, { spray: 150, speed: 1.25, shudder: 1.25 }]),
            TYPE: "shinybetawaferbread",
            MAX_CHILDREN: 8,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true
        }
    }])).flat(),
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 45, 0, 1],
        TYPE: "shinySquare"
    },{
        POSITION: [20 * Math.SQRT1_2 ** 2, 0, 0, 0, 0, 1],
        TYPE: "shinySquare"
    },{
        POSITION: [20 * Math.SQRT1_2 ** 3, 0, 0, 45, 0, 1],
        TYPE: "shinySquare"
    }]
};

exports.dogeiscutBody = {
    PARENT: "genericTank",
    SHAPE: [[1,0],[-0.7,0.7],[-0.35,0],[-0.7,-0.7]]
}
exports.dogeiscutTurret = {
    PARENT: "genericTank",
    GUNS: [ {
            POSITION: [ 50, 5, 2.5, 0, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.mini, {reload: 0.1}]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [ 18, 8, -2, 0, 0, 0, 0, ],
        }, 
    ],
    TURRETS: [
        {
            POSITION: [16, 0, 0, 0, 360, 1],
            TYPE: ["genericTank",  { MIRROR_MASTER_ANGLE: true, COLOR: "#f6c6a2"}],
        },
        {
            POSITION: [12, 0, 0, 0, 360, 1],
            TYPE: ["genericTank",  { MIRROR_MASTER_ANGLE: true, COLOR: "pink"}],
        },
    ]
}
function createDogeiscutMissileTurret(color) {
    return {
        PARENT: "genericTank",
        GUNS: [ {
                POSITION: [ 15, 8, 2.5, 0, 0, 180, 0, ],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([
                        g.basic,
                        g.skim,
                        g.doublereload,
                        g.lowpower,
                        g.muchmorerecoil,
                        g.morespeed,
                        g.morespeed,
                        {reload: 0.15, recoil: 1, range: 0.1}]),
                    TYPE: ["bullet", 
                        {
                        PERSISTS_AFTER_DEATH: true,
                        COLOR: color
                        },
                    ],
                    AUTOFIRE: true,
                    STAT_CALCULATOR: gunCalcNames.thruster,
                },
            },
        ],
    }
}
function createDogeiscutMissile(color) {
    return {
        PARENT: "bullet",
        LABEL: color + " Missile",
        COLOR: color,
        GUNS: [...Array(11).fill().map((_, i)=>({
            POSITION: [0, 8, 0, 0, 0, ((360) / 11)*i, 9999],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.noRandom, { recoil: 0, range: 0.4, damage: 2.5, density: 30 }]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true, COLOR: color }],
                SHOOT_ON_DEATH: true,
            },
        }))],
        TURRETS: [
            {
                POSITION: [16, 0, 0, 0, 360, 1],
                TYPE: ["dogeiscutMissileTurret_" + color],
            },
            {
                POSITION: [12, 0, 0, 0, 360, 1],
                TYPE: ["genericTank"],
            }
        ]
    }
}
exports.dogeiscutMissileTurret_red = createDogeiscutMissileTurret('red')
exports.dogeiscutMissile_red = createDogeiscutMissile('red')
exports.dogeiscutMissileTurret_orange = createDogeiscutMissileTurret('orange')
exports.dogeiscutMissile_orange = createDogeiscutMissile('orange')
exports.dogeiscutMissileTurret_yellow = createDogeiscutMissileTurret('yellow')
exports.dogeiscutMissile_yellow = createDogeiscutMissile('yellow')
exports.dogeiscutMissileTurret_green = createDogeiscutMissileTurret('green')
exports.dogeiscutMissile_green = createDogeiscutMissile('green')
exports.dogeiscutMissileTurret_cyan = createDogeiscutMissileTurret('cyan')
exports.dogeiscutMissile_cyan = createDogeiscutMissile('cyan')
exports.dogeiscutMissileTurret_blue = createDogeiscutMissileTurret('blue')
exports.dogeiscutMissile_blue = createDogeiscutMissile('blue')
exports.dogeiscutMissileTurret_purple = createDogeiscutMissileTurret('purple')
exports.dogeiscutMissile_purple = createDogeiscutMissile('purple')
exports.dogeiscutBomb = {
        PARENT: "trap",
        LABEL: "Bomb",
        SHAPE: 0,
        GUNS: [...Array(32).fill().map((_, i)=>({
            POSITION: [0, 8, 0, 0, 0, ((360) / 32)*i, 9999],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.noRandom, { recoil: 0, range: 0.4, damage: 2.5, size: 0.5}]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                SHOOT_ON_DEATH: true,
            },
        })),...Array(10).fill().map((_,i)=>({
            POSITION: [12, 3.5, 1, 0, 0, (360/10)*i, (i%3)/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                    {reload: 3}
                ]),
                TYPE: "bullet",
                AUTOFIRE: true,
            },
            }))
        ],
        TURRETS: [
            {
                POSITION: [8, 0, 0, 0, 360, 1],
                TYPE: ["genericTank"],
            }
        ]
    }
exports.dogeiscutBoss = {
    PARENT: "miniboss",
    LABEL: "DOG",
    NAME: "DogeisCut",
    DANGER: 10,
    FACING_TYPE: "smoothToTarget",
    SHAPE: [[1,0],[-0.7,0.7],[-0.35,0],[-0.7,-0.7]],
    COLOR: "yellow",
    SIZE: 50,
    VALUE: 5e6,
    BODY: {
        FOV: 0.75,
        SPEED: 0.25 * base.SPEED,
        HEALTH: 14 * base.HEALTH,
        DAMAGE: 4 * base.DAMAGE,
    },
    GUNS: [ {
            POSITION: [ 6, 8, 1.5, 3, 0, 180, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, {size: 1, reload: 3, recoil: 5}]),
                TYPE: ["dogeiscutBomb"],
                STAT_CALCULATOR: gunCalcNames.sustained,
            }
        }, {
            POSITION: [ 4, 4, 1.5, 3, 0, 180, 0, ],
            PROPERTIES: {
                COLOR: 9
            }
        }, 
        
        {
            POSITION: [ 1, 2, 1, 4, -8, 68, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind, {speed: 3, range: 0.8, reload: 4}]),
                TYPE: ["dogeiscutMissile_red"],
                STAT_CALCULATOR: gunCalcNames.sustained,
                COLOR: 'red'
            }
        }, {
            POSITION: [ 1, 2, 1, 4, -5.333, 68, 1/7, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind, {speed: 3, range: 0.8, reload: 4}]),
                TYPE: ["dogeiscutMissile_orange"],
                STAT_CALCULATOR: gunCalcNames.sustained,
                COLOR: 'orange'
            }
        }, {
            POSITION: [ 1, 2, 1, 4, -2.666, 68, (1/7)*2, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind, {speed: 3, range: 0.8, reload: 4}]),
                TYPE: ["dogeiscutMissile_yellow"],
                STAT_CALCULATOR: gunCalcNames.sustained,
                COLOR: 'yellow'
            }
        }, {
            POSITION: [ 1, 2, 1, 4, 0, 68, (1/7)*3, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind, {speed: 3, range: 0.8, reload: 4}]),
                TYPE: ["dogeiscutMissile_green"],
                STAT_CALCULATOR: gunCalcNames.sustained,
                COLOR: 'green'
            }
        }, {
            POSITION: [ 1, 2, 1, 4, 2.666, 68, (1/7)*4, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind, {speed: 3, range: 0.8, reload: 4}]),
                TYPE: ["dogeiscutMissile_cyan"],
                STAT_CALCULATOR: gunCalcNames.sustained,
                COLOR: 'cyan'
            }
        }, {
            POSITION: [ 1, 2, 1, 4, 5.333, 68, (1/7)*5, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind, {speed: 3, range: 0.8, reload: 4}]),
                TYPE: ["dogeiscutMissile_blue"],
                STAT_CALCULATOR: gunCalcNames.sustained,
                COLOR: 'blue'
            }
        }, {
        POSITION: [ 1, 2, 1, 4, 8, 68, (1/7)*6, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind, {speed: 3, range: 0.8, reload: 4}]),
                TYPE: ["dogeiscutMissile_purple"],
                STAT_CALCULATOR: gunCalcNames.sustained,
                COLOR: 'purple'
            }
        }, 
        
        
        {
        POSITION: [ 1, 2, 1, 4, 8, -68, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind, {speed: 3, range: 0.8, reload: 4}]),
                TYPE: ["dogeiscutMissile_red"],
                STAT_CALCULATOR: gunCalcNames.sustained,
                COLOR: 'red'
            }
        }, {
            POSITION: [ 1, 2, 1, 4, 5.333, -68, 1/7, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind, {speed: 3, range: 0.8, reload: 4}]),
                TYPE: ["dogeiscutMissile_orange"],
                STAT_CALCULATOR: gunCalcNames.sustained,
                COLOR: 'orange'
            }
        }, {
            POSITION: [ 1, 2, 1, 4, 2.666, -68, (1/7)*2, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind, {speed: 3, range: 0.8, reload: 4}]),
                TYPE: ["dogeiscutMissile_yellow"],
                STAT_CALCULATOR: gunCalcNames.sustained,
                COLOR: 'yellow'
            }
        }, {
            POSITION: [ 1, 2, 1, 4, 0, -68, (1/7)*3, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind, {speed: 3, range: 0.8, reload: 4}]),
                TYPE: ["dogeiscutMissile_green"],
                STAT_CALCULATOR: gunCalcNames.sustained,
                COLOR: 'green'
            }
        }, {
        POSITION: [ 1, 2, 1, 4, -2.666, -68, (1/7)*4, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind, {speed: 3, range: 0.8, reload: 4}]),
                TYPE: ["dogeiscutMissile_cyan"],
                STAT_CALCULATOR: gunCalcNames.sustained,
                COLOR: 'cyan'
            }
        }, {
            POSITION: [ 1, 2, 1, 4, -5.333, -68, (1/7)*5, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind, {speed: 3, range: 0.8, reload: 4}]),
                TYPE: ["dogeiscutMissile_blue"],
                STAT_CALCULATOR: gunCalcNames.sustained,
                COLOR: 'blue'
            }
        }, {
            POSITION: [ 1, 2, 1, 4, -8, -68, (1/7)*6, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind, {speed: 3, range: 0.8, reload: 4}]),
                TYPE: ["dogeiscutMissile_purple"],
                STAT_CALCULATOR: gunCalcNames.sustained,
                COLOR: 'purple'
            }
        },
    ],
    TURRETS: [
        {
            POSITION: [16, 0, 0, 0, 360, 1],
            TYPE: ["dogeiscutBody",  { MIRROR_MASTER_ANGLE: true, COLOR: "#f6c6a2"}],
        },
        {
            POSITION: [12, 0, 0, 0, 360, 1],
            TYPE: ["dogeiscutBody",  { MIRROR_MASTER_ANGLE: true, COLOR: "pink"}],
        },
        {
            POSITION: [5, 0, 0, 0, 360, 1],
            TYPE: ["dogeiscutTurret",  { INDEPENDENT: true, CONTROLLERS: ["nearestDifferentMaster"], COLOR: "yellow" }],
        },
        {
            POSITION: [1, 10.5, 0, 0, 360, 0],
            TYPE: ["genericTank",  {COLOR: "black"}],
        },
    ]
}
exports.trplnrBossAuraBulletAura = addAura(1, 1)
exports.trplnrBossAuraBullet = {
    PARENT: 'genericTank',
    LABEL: 'Nest',
    SHAPE: -4,
    PERSISTS_AFTER_DEATH: true,
    BODY: {
        HEALTH: 100,
    },
    SIZE: 25,
    COLOR: '#F49EFF',
    GLOW: {
        STRENGTH: 25,
        COLOR: -1,
        ALPHA: 1
    },
    DRAW_HEALTH: true,
    GUNS: (() => {
        let output = []
        for (let i = 0; i < 4; i++) {
            output.push({
                POSITION: { ANGLE: (360/4)*i, ASPECT: -0.35, X: -5 },
                PROPERTIES: {
                    COLOR: 'white',
                    SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.small, {reload: 0.8, damage: 1.25}]),
                    TYPE: 'autoswarm',
                    AUTOFIRE: true,
                },
            })
        }
        return output
    })(),
    TURRETS: [
        {
            POSITION: {SIZE: 10, LAYER: 1},
            TYPE: "trplnrBossAuraBulletAura"
        }
    ]
}
const trplnrBossDecor = {
    COLOR: '#F49EFF',
    LABEL: 'Lavender',
    NAME: 'Trioplane',
    SHAPE: 3,
    SIZE: 25,
    VALUE: 5e9,
    DANGER: 10,
    GLOW: {
        RADIUS: 15,
        COLOR: -1,
        ALPHA: 1,
        RECURSION: 5
    },
    TURRETS: [{
        POSITION: { SIZE: 25 ** Math.SQRT1_2, ANGLE: 180, LAYER: 1 },
        TYPE: ['triangle', { COLOR: 'black', MIRROR_MASTER_ANGLE: true }]
    }, {
        POSITION: { SIZE: 25 ** Math.SQRT1_2, LAYER: 1 },
        TYPE: ['triangle', { COLOR: -1, MIRROR_MASTER_ANGLE: true }]
    }, {
        POSITION: { SIZE: 25 },
        TYPE: ['triangle', { COLOR: 'black', MIRROR_MASTER_ANGLE: true }]
    }],
}
exports.trplnrBoss = {
    PARENT: "miniboss",
    ...trplnrBossDecor,
    BODY: {
        HEALTH: 500,
    },
    ON: [
        {
            event: 'fire',
            handler: ({ body, gun }) => {
                if (gun.identifier != 'onHandler') return
                const messages = [
                    'Attack my little swarms!',
                    'Deploying, Attack swarms',
                    'You really think you can defeat me? Heres a little challenge for you.',
                    'This thing is really gonna annoy you HAHA!',
                    'I don\'t know what to say uhhh, die i guess.'
                ]
                body.sendMessage(messages[Math.floor(Math.random() * messages.length)])
                body.sendMessage('Lavender will turn into `BULL3T HELL F0rM`, Run!')
                for (let i = 0; i < 24; i++) {
                    i < 12 ?
                        setTimeout(() => { body.SIZE /= 1.1; body.alpha /= 1.2 }, i * 50)
                        :
                        setTimeout(() => { body.SIZE *= 1.1; body.alpha *= 1.2 }, i * 50)
                }
                setTimeout(() => {
                    let range = 500
                    let whereToGoX = Math.random() > 0.5 ? Math.floor(Math.random() * -range) : Math.floor(Math.random() * range)
                    let whereToGoY = Math.random() > 0.5 ? Math.floor(Math.random() * -range) : Math.floor(Math.random() * range)
                    body.x += whereToGoX
                    body.y += whereToGoY
                }, 12 * 50);
                setTimeout(() => body.define('trplnrBossBulletHellForm'), 24 * 50)
            }
        }
    ],
    GUNS: (() => {
        let output = []
        for (let i = 0; i<2; i++) {
            output.push({
                POSITION: { WIDTH: 10, X: -5, ASPECT: -0.7, ANGLE: ((360 / 3) * i) - 180 },
                PROPERTIES: {
                    COLOR: 'white',
                    SHOOT_SETTINGS: combineStats([g.basic, {reload: 100}]),
                    TYPE: "trplnrBossAuraBullet",
                    INDEPENDENT_CHILDREN: true,
                }
            })
        }
        output.push({
            POSITION: { WIDTH: 10, X: -5, ASPECT: -0.7, ANGLE: ((360 / 3) * 2) - 180 },
            PROPERTIES: {
                COLOR: 'white',
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 100}]),
                TYPE: "trplnrBossAuraBullet",
                INDEPENDENT_CHILDREN: true,
                IDENTIFIER: 'onHandler'
            }
        })
        for (let i = 0; i < 3; i++) {
            output.push({
                POSITION: { WIDTH: 5, ASPECT: -0.7, ANGLE: ((360 / 3) * i) - 180 },
                PROPERTIES: {
                    COLOR: 'black'
                }
            })
            output.push({
                POSITION: { WIDTH: 5, HEIGHT: 5, X: -30, ASPECT: 0, ANGLE: ((360 / 3) * i) - 180 },
                PROPERTIES: {
                    COLOR: 'black'
                }
            }, {
                POSITION: { WIDTH: 5, HEIGHT: 5, X: -25, ASPECT: 0, ANGLE: ((360 / 3) * i) - 180 },
                PROPERTIES: {
                    COLOR: 'white'
                }
            })
        }
        return output
    })()
}

exports.trplnrBossBulletHellFormPentagonsAuraBullet = {
    PARENT: 'bullet',
    TURRETS: [{
        POSITION: {SIZE: 15, LAYER: 1},
        TYPE: "trplnrBossAuraBulletAura"
    }]
} 

exports.trplnrBossBulletHellFormPentagons = {
    PARENT: 'bullet',
    LABEL: 'Pentagon',
    SHAPE: -5,
    TURRETS: [{
        POSITION: { SIZE: 40 ** Math.SQRT1_2, ANGLE: 180, LAYER: 1 },
        TYPE: ['pentagon', {COLOR: 'black', MIRROR_MASTER_ANGLE: true}]
    }],
    GUNS: (() => {
        let output = []
        for (let i = 0; i < 5; i++) {
            output.push({
                POSITION: { WIDTH: 10, HEIGHT: 10, ANGLE: ((360/5)*i) - 180, DELAY: 1 },
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.pound, {reload: 0.8}]),
                    TYPE: 'trplnrBossBulletHellFormPentagonsAuraBullet',
                    AUTOFIRE: true,
                    COLOR: 'white'
                }
            })
        }
        return output
    })()
}
exports.trplnrBossBulletHellForm = {
    PARENT: "miniboss",
    ...trplnrBossDecor,
    LABEL: 'Lavender - Bullet Hell Form',
    BODY: {
        HEALTH: 500,
    },
    ON: [
        {
            event: "fire",
            handler: ({ body, masterStore, gun }) => {
                if (gun.identifier != 'onHandler') return
                masterStore.shotsFired ??= 0
                masterStore.shotsFired++

                for (let i = 0; i < 24; i++) {
                    i < 12 ?
                        setTimeout(() => { body.SIZE /= 1.1; body.alpha /= 1.2 }, i * 50)
                        :
                        setTimeout(() => { body.SIZE *= 1.1; body.alpha *= 1.2 }, i * 50)
                }
                setTimeout(() => {
                    let range = 500
                    let whereToGoX = Math.random() > 0.5 ? Math.floor(Math.random() * -range) : Math.floor(Math.random() * range)
                    let whereToGoY = Math.random() > 0.5 ? Math.floor(Math.random() * -range) : Math.floor(Math.random() * range)
                    body.x += whereToGoX
                    body.y += whereToGoY
                }, 12 * 50)

                if (masterStore.shotsFired > 5) {
                    body.define('trplnrBossVulnerableForm')
                    const messages = [
                        'I\'m a little tired right now',
                        'Ouch my leg!',
                        'i sleep',
                        'Bruh my keyboard isn\'t working',
                        'Omg bruh I chose the wrong form'
                    ]
                    body.sendMessage(messages[Math.floor(Math.random() * messages.length)])
                    body.sendMessage('Lavender is in its `VULN3RABLE F0RM`, Attack!')
                }
            }
        }
    ],
    GUNS: (() => {
        let output = []
        for (let i = 0; i<3; i++) {
            output.push({
                POSITION: { WIDTH: 15, HEIGHT: 5, ANGLE: ((360 / 3) * i)-180, ASPECT: 0, X: -25 },
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, { reload: 1 }]),
                    TYPE: 'trplnrBossBulletHellFormPentagonsAuraBullet',
                    COLOR: 'black'
                }
            }, {
                POSITION: { WIDTH: 15, HEIGHT: 5, ANGLE: ((360 / 3) * i)-180, ASPECT: 0, X: -20 },
                PROPERTIES: {
                    COLOR: 'white'
                }
            }, {
                POSITION: { WIDTH: 10, HEIGHT: 5, ASPECT: 1.5, ANGLE: ((360 / 3) * i) - 180 },
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, { reload: 2 }]),
                    TYPE: 'trplnrBossBulletHellFormPentagons',
                    COLOR: 'white'
                }
            }, {
                POSITION: { WIDTH: 8, HEIGHT: 3, X: -1, ASPECT: 1.5, ANGLE: ((360 / 3) * i) - 180 },
                PROPERTIES: {
                    COLOR: 'pureWhite',
                }
            }, {
                POSITION: { WIDTH: 5, HEIGHT: 10, X: 5, ASPECT: 0.2, ANGLE: ((360 / 3) * i) - 180 },
                PROPERTIES: {
                    COLOR: -1,
                }
            })
        }
        output.push({
            POSITION: { WIDTH: 0, HEIGHT: 0 },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, { reload: 2 }, g.fake]),
                TYPE: 'bullet',
                IDENTIFIER: 'onHandler'
            }
        })
        return output
    })()
}
exports.trplnrBossVulnerableForm = {
    PARENT: "miniboss",
    ...trplnrBossDecor,
    LABEL: 'Lavender - Vulnerable Form',
    BODY: {
        HEALTH: 500,
        SPEED: 0.01
    },
    ON: [
        {
            event: "fire",
            handler: ({ body, gun }) => {
                if (gun.identifier != 'onHandler') return
                setTimeout(() => {
                    body.define('trplnrBoss')
                    body.sendMessage('im awake')
                }, 15000)
                setTimeout(() => body.sendMessage('Lavender will activate in 10 seconds and turn into S4nctuary F0rM'), 5000)
            }
        }
    ],
    GUNS: [{
        POSITION: {LENGTH: 0, WIDTH: 0},
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {reload: 500}]),
            TYPE: 'bullet',
            AUTOFIRE: true,
            IDENTIFIER: 'onHandler'
        }
<<<<<<< Updated upstream
    }]
=======
    ]

};
exports.sunDrone = {
    PARENT: ["drone"],
    COLOR: '#ffd285',
    DRAW_HEALTH: true,
    SHAPE: 3,
    INDEPENDENT: true,
    BODY: {
        PUSHABILITY: 0.3,
        HEALTH: 0.3*5,
        DAMAGE: 3.375/2,
        SPEED: 1.4,
        DENSITY: 0.1,
        RESIST: 2,
        FOV: 100,
    },
}
exports.solBottomBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.01 }]],
    COLOR: '#ffd285',
    SIZE: 100,
    SKILL: [9, 13, 9, 9, 9, 9, 11, 12, 6, 9],
    SHAPE: 9,
    FOV: 10,
    TURRETS: [],
};
for(let i = 0; i < 9; i++) {
    exports.solBottomBody.TURRETS.push(
        {
            POSITION: [6.5, 9, 0, 360/9*(i+0.5), 160, 0],
            TYPE: ["solSkimmerTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.solMiddleBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: '#ffd285',
    SIZE: 100,
    SKILL: [9, 13, 9, 9, 9, 9, 10, 10, 6, 9],
    SHAPE: 7,
    FOV: 25,
    MAX_CHILDREN: 30,
    TURRETS: [],
};
for(let i = 0; i < 7; i++) {
    exports.solMiddleBody.TURRETS.push(
        {
            POSITION: [8, 8.5, 0, 360/7*(i+0.5), 160, 0],
            TYPE: ["carrierTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.solTopBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: '#ffd285',
    SIZE: 100,
    SKILL: [9, 13, 9, 9, 12, 10, 14, 13, 6, 9],
    SHAPE: 5,
    FOV: 10,
    TURRETS: [],
};
for(let i = 0; i < 5; i++) {
    exports.solTopBody.TURRETS.push(
        {
            POSITION: [9.5, 9, 0, 360/5*(i+0.5), 160, 0],
            TYPE: ["assemblerTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.solBasicGen = addAura();
exports.sol = {
    PARENT: ["eternal"],
    NAME: "Sol",
    COLOR: '#ffd285',
    TURRETS: [
	{
		POSITION: [11, 0, 0, 0, 360, 1],
		TYPE: 'atmosphereOfficialV2',
	},
	{
		POSITION: [8, 0, 0, 0, 360, 1],
		TYPE: 'atmosphereOfficialV2',
	},
	{
		POSITION: [5, 0, 0, 0, 360, 1],
		TYPE: 'atmosphereOfficialV2',
	},
        {
            POSITION: [15.5, 0, 0, 0, 360, 1],
            TYPE: ["solBottomBody"],
        },
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: ["solMiddleBody"],
        },
        {
            POSITION: [6.5, 0, 0, 0, 360, 1],
            TYPE: ["solTopBody"],
        },
    ],
};
for(let i = 0; i < 11; i++) {
    exports.sol.TURRETS.push(
        {
            POSITION: [6, 9, 0, 360/11*(i+0.5), 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

exports.bloodchip = {
    PARENT: ["sunchip"],
    SHAPE: 6
};
exports.apostal = {
    PARENT: ["miniboss"],
    LABEL: "Apostal",
    DANGER: 8,
    SHAPE: 6,
    COLOR: 0,
    SIZE: 26,
    MAX_CHILDREN: 15,
    FACING_TYPE: "autospin",
    VALUE: 5e5,
    BODY: {
        FOV: 0.6,
        SPEED: 0.07 * base.SPEED,
        HEALTH: 17 * base.HEALTH,
        DAMAGE: 5.5 * base.DAMAGE,
    },
    GUNS: Array(6).fill().map((_, i) => ({
        POSITION: [3.5, 8.65, 1.2, 8, 0, i * 60, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy]),
            TYPE: "bloodchip",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true,
        },
    }))
};

exports.eliteProctrate = {
    PARENT: ["elite"],
    LABEL: "Artillery Hull",
    COLOR: 2,
    TURRETS: [
        {
            POSITION: [15, 5, 0, 60, 170, 0],
            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.halfreload, g.halfrange, g.halfrange, g.halfreload]),
            TYPE: "architectGun",
        },
        {
            POSITION: [15, 5, 0, 180, 170, 0],
            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.halfreload, g.halfrange, g.halfrange, g.halfreload]),
            TYPE: "architectGun",
        },
        {
            POSITION: [15, 5, 0, 300, 170, 0],
            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.halfreload, g.halfrange, g.halfrange, g.halfreload]),
            TYPE: "architectGun",
        },
    ],
};

exports.elitehealgen = addAura(-1, 1.5);
exports.eliteheal = {
    PARENT: ["elite"],
    LABEL: "Artillery Medbay",
    COLOR: 2,
    TURRETS: [
	{
	    POSITION: [10, 0, 0, 0, 360, 1],
	    TYPE: 'thermosphereAuraOfficialV2',
	},
        {
            POSITION: [15, 5, 0, 60, 170, 0],
            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange, g.halfreload, g.halfreload]),
            TYPE: "barricade",
        },
        {
            POSITION: [15, 5, 0, 180, 170, 0],
            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.halfreload, g.halfreload]),
            TYPE: "barricade",
        },
        {
            POSITION: [15, 5, 0, 300, 170, 0],
            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.halfreload, g.halfreload]),
            TYPE: "barricade",
        },
    ],
};

exports.nemesistriangle = {
    PARENT: ["smasherBody"],
    SHAPE: 3
};

exports.nemesisold = {
    PARENT: ["genericTank"],
    SKILL: [15, 1, 1, 15, 15, 15, 15, 15, 15, 15],
    LABEL: "Nemesis",
    BODY: {
        FOV: 1.25,
        SPEED: 1.5 * base.SPEED,
        HEALTH: 20 * base.HEALTH^5,
        DAMAGE: 2.5 * base.DAMAGE,
    },
    HITS_OWN_TYPE: "hard",
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
    SHAPE: 0,
    COLOR: '#f52e20',
    SIZE: 20,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    LEVEL: 69,
    AI: { NO_LEAD: true },
    GUNS: [],
    TURRETS: [
	{
            POSITION: [25, 0, 0, 0, 344, 0],
            TYPE: "smasherBody",
	},
        {
            POSITION: [25, 0, 0, 0, 93, 0],
            TYPE: "smasherBody",
        },
        {
            POSITION: [25, 0, 0, 0, 182, 0],
            TYPE: "nemesistriangle",
        },
],
};

exports.bobtriangle = {
    PARENT: ["smasherBody"],
    SHAPE: 3
};

exports.bob = {
    PARENT: ["elite"],
    SKILL: [1, 1, 1, 1, 1, 1, 13, 10, 10, 10],
    LABEL: "Bob",
    BODY: {
        FOV: 1.25,
        SPEED: 1.2 * base.SPEED,
        HEALTH: 2 * base.HEALTH,
        DAMAGE: 2.5 * base.DAMAGE,
    },
    SHAPE: 0,
    COLOR: 0,
    SIZE: 20,
    GUNS: [],
    TURRETS: [
	{
            POSITION: [25, 0, 0, 0, 344, 0],
            TYPE: "smasherBody",
	},
        {
            POSITION: [25, 0, 0, 0, 182, 0],
            TYPE: "bobtriangle",
        },
],
};

//Thanatos

exports.thanatostriangle = {
    PARENT: ["smasherBody"],
    SHAPE: 3
};

exports.thanatosgen = addThanatosAura(3, 1.5);
exports.thanatos = {
    PARENT: ["genericTank"],
    SKILL: [20, 1, 1, 20, 20, 20, 20, 20, 20, 20],
    LABEL: "Thanatos",
    BODY: {
        FOV: 1.25,
        SPEED: 1.5 * base.SPEED,
        HEALTH: 30 * base.HEALTH^5,
        DAMAGE: 2.5 * base.DAMAGE,
    },
    HITS_OWN_TYPE: "hard",
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
    SHAPE: 0,
    COLOR: 16,
    SIZE: 20,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    LEVEL: 200,
    AI: { NO_LEAD: true },
    GUNS: [],
    TURRETS: [
	{
            POSITION: [25, 0, 0, 0, 344, 0],
            TYPE: "smasherBody",
	},
        {
            POSITION: [25, 0, 0, 0, 93, 0],
            TYPE: "smasherBody",
        },
        {
            POSITION: [25, 0, 0, 0, 182, 0],
            TYPE: "thanatostriangle",
        },
	{
	    POSITION: [10, 0, 0, 0, 0, 2],
	    TYPE: 'thanatosgen',
	},
],
};


// Artemis

exports.musketTurret = {
    PARENT: ["genericTank"],
    LABEL: "Musket",
    BODY: {
        FOV: 2,
        SPEED: 1.4 * base.SPEED,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [16, 19, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [18, 7, 1, 0, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 7, 1, 0, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
                TYPE: "bullet",
            },
        },
    ],
};


exports.crossbowTurret = {
    PARENT: ["genericTank"],
    LABEL: "Crossbow",
    BODY: {
        FOV: 2,
        SPEED: 1.4 * base.SPEED,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [12.5, 2.5, 1, 0, 3.5, 35, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12.5, 2.5, 1, 0, -3.5, -35, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 2.5, 1, 0, 3.5, 35/2, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 2.5, 1, 0, -3.5, -35/2, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 3.5, 1, 0, 4, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 3.5, 1, 0, -4, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.halfreload,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.artemisLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: '#42f56f',
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 7,
    INDEPENDENT: true,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            //*********    SIZE         X             Y         ANGLE        ARC
            POSITION: [8.5, 9, 0, 26, 180, 0],
            TYPE: ["crossbowTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 77, 180, 0],
            TYPE: ["crossbowTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 129, 180, 0],
            TYPE: ["crossbowTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 180, 180, 0],
            TYPE: ["crossbowTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 231, 180, 0],
            TYPE: ["crossbowTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 282, 180, 0],
            TYPE: ["crossbowTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 333, 180, 0],
            TYPE: ["crossbowTurret"],
        },
    ],
};
exports.artemisUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: '#42f56f',
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            //**     SIZE         X             Y         ANGLE        ARC
            POSITION: [10.6, 7.5, 0, 35, 160, 0],
            TYPE: ["musketTurret"],
        },
        {
            POSITION: [10.6, 7.5, 0, 110, 160, 0],
            TYPE: ["musketTurret"],
        },
        {
            POSITION: [10.6, 7.5, 0, 180, 160, 0],
            TYPE: ["musketTurret"],
        },
        {
            POSITION: [10.6, 7.5, 0, 252, 160, 0],
            TYPE: ["musketTurret"],
        },
        {
            POSITION: [10.6, 7.5, 0, 325, 160, 0],
            TYPE: ["musketTurret"],
        },
    ],
};
exports.artemis = {
    PARENT: ["celestial"],
    NAME: "Artemis",
    COLOR: '#42f56f',
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [14.77, 0, 0, 0, 360, 1],
            TYPE: ["artemisLowerBody"],
        },
        {
            POSITION: [8.7, 0, 0, 0, 360, 1],
            TYPE: ["artemisUpperBody"],
        },
    ],
};

// Asterius

exports.rangerTurret = {
    PARENT: ["genericTank"],
    LABEL: "Ranger",
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 2 * base.FOV,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [32, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
    ],
};
exports.sniperTurret = {
    PARENT: ["genericTank"],
    LABEL: "Sniper",
    BODY: {
        FOV: 2 * base.FOV,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [24, 8.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.asteriusLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: '#42f56f',
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 5,
    INDEPENDENT: true,
    BODY: {
        FOV: 10,
        SPEED: 1.6 * base.SPEED,
    },
    MAX_CHILDREN: 18,
    FACING_TYPE: "autospin",
    TURRETS: [],
};
for(let i = 0; i < 5; i++) {
    exports.asteriusLowerBody.TURRETS.push(
        {
            POSITION: [9, 8, 0, 360/5*(i+0.5), 160, 0],
            TYPE: ["rangerTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.asteriusUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: '#42f56f',
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 3,
    INDEPENDENT: true,
    TURRETS: [],
};
for(let i = 0; i < 3; i++) {
    exports.asteriusUpperBody.TURRETS.push(
        {
            POSITION: [9.5, 7.5, 0, 360/3*(i+0.5), 160, 0],
            TYPE: ["sniperTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.asterius = {
    PARENT: ["terrestrial"],
    NAME: "Asterius",
    COLOR: '#42f56f',
    TURRETS: [
        {
            POSITION: [14.5, 0, 0, 0, 360, 1],
            TYPE: ["asteriusLowerBody"],
        },
        {
            POSITION: [8.5, 0, 0, 0, 360, 1],
            TYPE: ["asteriusUpperBody"],
        },
    ],
};
for(let i = 0; i < 7; i++) {
    exports.asterius.TURRETS.push(
        {
            POSITION: [7, 9, 0, 360/7*(i+0.5), 180, 0],
            TYPE: ["terrestrialTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

// Nest Reactor

exports.nestreactortrap = {
    PARENT: ["genericTank"],
    LABEL: "nest trapper",
    GUNS: [
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                AUTOFIRE: true,
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
		
            },
        },
    ],
};

exports.nestreactorgen = addAura(1, 1);
exports.nestReactor = {
    PARENT: ["miniboss"],
    LABEL: "Nest Reactor",
    COLOR: 14,
    SHAPE: 5,
    SIZE: 50,
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 9,
        SHIELD: base.SHIELD * 1.5,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
    },
    GUNS: [
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, 35, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: "snake",
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, -35, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: "snake",
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: "snake",
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, 108, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: "snake",
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, -108, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: "snake",
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
    ],
    TURRETS: [
	{
	    POSITION: [10, 0, 0, 0, 0, 0],
	    TYPE: 'atmosphereOfficialV2',
	},
        {
            POSITION: [8, 9, 0, 72, 120, 0],
            TYPE: [
                "nestreactortrap",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [8, 9, 0, 0, 120, 0],
            TYPE: [
                "nestreactortrap",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [8, 9, 0, 144, 120, 0],
            TYPE: [
                "nestreactortrap",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [8, 9, 0, 216, 120, 0],
            TYPE: [
                "nestreactortrap",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [8, 9, 0, -72, 120, 0],
            TYPE: [
                "nestreactortrap",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE:[ "triTrapGuardTurret",
		{
		COLOR: 14,
		},
	],
        },
    ],
};



// dev bosses

exports.squaregunshoot = {
    PARENT: ["bullet"],
    SHAPE: 3
};

exports.squareshotgun = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Shotgun",
    GUNS: [
	{
            POSITION: [15, 14, 1, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, { size: 0.6 }]),
                TYPE: "squaregunshoot",
	},
	},
	{
	POSITION: [8, 14, -1.3, 4, 0, 0, 0],
	},
    ],
};


exports.squaregunmangen = addAura(.9, .1);
exports.squaregunman = {
    PARENT: ["elite"],
    SKILL: [5, 9, 4, 12, 3, 9, 9, 9, 7, 3],
    LABEL: "Square Gun Man",
    INDEPENDENT: true,
    SHAPE: 4,
    COLOR: '#c854fc',
    SIZE: 20,
    GUNS: [],
    TURRETS: [
	{
	    POSITION: [10, 5, 0, 0, 0, 0],
	    TYPE: 'atmosphereOfficialV2',
	},
        {
            POSITION: [15, 5, 0, 0, 170, 0],
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.7 }]),
            TYPE: "squareshotgun",
        },
	{
	    POSITION: [10, 5, 0, 90, 0, 0],
	    TYPE: 'atmosphereOfficialV2',
	},
        {
            POSITION: [15, 5, 0, 90, 170, 0],
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.7 }]),
            TYPE: "squareshotgun",
        },
	{
	    POSITION: [10, 5, 0, 180, 0, 0],
	    TYPE: 'atmosphereOfficialV2',
	},
        {
            POSITION: [15, 5, 0, 180, 170, 0],
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.7 }]),
            TYPE: "squareshotgun",
        },
	{
	    POSITION: [10, 5, 0, 270, 0, 0],
	    TYPE: 'atmosphereOfficialV2',
	},
        {
            POSITION: [15, 5, 0, 270, 170, 0],
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.7 }]),
            TYPE: "squareshotgun",
        },
    ],
};

// Amalgamboss

exports.profLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 36,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 7,
    INDEPENDENT: true,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            //*********    SIZE         X             Y         ANGLE        ARC
            POSITION: [8.5, 9, 0, 26, 180, 0],
            TYPE: ["sorcerer"],
        },
        {
            POSITION: [8.5, 9, 0, 77, 180, 0],
            TYPE: ["summoner"],
        },
        {
            POSITION: [8.5, 9, 0, 129, 180, 0],
            TYPE: ["enchantress"],
        },
        {
            POSITION: [8.5, 9, 0, 180, 180, 0],
            TYPE: ["exorcistor"],
        },
        {
            POSITION: [8.5, 9, 0, 231, 180, 0],
            TYPE: ["apostal"],
        },
        {
            POSITION: [8.5, 9, 0, 282, 180, 0],
            TYPE: ["roguePalisade"],
        },
        {
            POSITION: [8.5, 9, 0, 333, 180, 0],
            TYPE: ["eliteSkimmer"],
        },
        {
            POSITION: [8.5, 24, 0, 333, 180, 0],
            TYPE: ["nestReactor"],
        },
        {
            //*********    SIZE         X             Y         ANGLE        ARC
            POSITION: [8.5, 24, 0, 180, 180, 0],
            TYPE: ["eliteheal"],
        },
        {
            POSITION: [8.5, 24, 0, 282, 180, 0],
            TYPE: ["nemesisold"],
        },
        {
            POSITION: [8.5, 24, 0, 231, 180, 0],
            TYPE: ["squaregunman"],
        },
        {
            POSITION: [8.5, 24, 0, 77, 180, 0],
            TYPE: ["eliteProctrate"],
        },
        {
            POSITION: [8.5, 24, 0, 129, 180, 0],
            TYPE: ["bob"],
        },
        {
            //*********    SIZE         X             Y         ANGLE        ARC
            POSITION: [8.5, 24, 0, 26, 180, 0],
            TYPE: ["thanatos"],
        },
    ],
};
exports.profUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 36,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 120,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            //**     SIZE         X             Y         ANGLE        ARC
            POSITION: [10.6, 7.5, 0, 35, 160, 0],
            TYPE: ["eliteDestroyer"],
        },
        {
            POSITION: [10.6, 7.5, 0, 110, 160, 0],
            TYPE: ["eliteGunner"],
        },
        {
            POSITION: [10.6, 7.5, 0, 180, 160, 0],
            TYPE: ["eliteSprayer"],
        },
        {
            POSITION: [10.6, 7.5, 0, 252, 160, 0],
            TYPE: ["eliteBattleship"],
        },
        {
            POSITION: [10.6, 7.5, 0, 325, 160, 0],
            TYPE: ["eliteSpawner"],
        },
    ],
};
exports.prof = {
    PARENT: ["celestial"],
    NAME: "ERR://23¤Y%/",
    TOOLTIP: "You're doomed.",
    COLOR: 36,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: ["paladin", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: ["freyja", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: ["zaphkiel", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: ["nyx", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: ["theia", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: ["artemis", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: ["tyr", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: ["alviss", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: ["fiolnir", { INDEPENDENT: true }],
        },
        {
            POSITION: [14.77, 0, 0, 0, 360, 1],
            TYPE: ["profLowerBody"],
        },
        {
            POSITION: [8.7, 0, 0, 0, 360, 1],
            TYPE: ["profUpperBody"],
        },
    ],
    BROADCAST_MESSAGE: "Nameless Deity has been usurped. Reality is safe for a short time.",
};

//ect

exports.ordnanceattack = {
    PARENT: ["genericTank"],
    LABEL: "Ordnance",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [17, 3, 1, 0, -5.75, -6, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 5.75, 6, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 11, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: "bullet",
            },
        },
    ],
};


exports.elitecommander = {
    PARENT: ["elite"],
    LABEL: "Artillery Commander",
    COLOR: 2,
    TURRETS: [
        {
            POSITION: [15, 5, 0, 60, 170, 0],
            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange, g.halfreload, g.halfreload]),
            TYPE: "ordnanceattack",
        },
        {
            POSITION: [15, 5, 0, 180, 170, 0],
            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.halfreload, g.halfreload]),
            TYPE: "ordnanceattack",
        },
        {
            POSITION: [15, 5, 0, 300, 170, 0],
            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.halfreload, g.halfreload]),
            TYPE: "ordnanceattack",
        },
    ],
};

// Rhea

exports.rheaLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 17,
    BODY: {
        FOV: base.FOV * 2,
	},
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 7,
    INDEPENDENT: true,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            //*********    SIZE         X             Y         ANGLE        ARC
            POSITION: [8.5, 9, 0, 26, 180, 0],
            TYPE: ["wrench"],
        },
        {
            POSITION: [8.5, 9, 0, 77, 180, 0],
            TYPE: ["wrench"],
        },
        {
            POSITION: [8.5, 9, 0, 129, 180, 0],
            TYPE: ["wrench"],
        },
        {
            POSITION: [8.5, 9, 0, 180, 180, 0],
            TYPE: ["wrench"],
        },
        {
            POSITION: [8.5, 9, 0, 231, 180, 0],
            TYPE: ["wrench"],
        },
        {
            POSITION: [8.5, 9, 0, 282, 180, 0],
            TYPE: ["wrench"],
        },
        {
            POSITION: [8.5, 9, 0, 333, 180, 0],
            TYPE: ["wrench"],
        },
    ],
};
exports.rheaUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 17,
    BODY: {
        FOV: base.FOV * 2,
	},
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            //**     SIZE         X             Y         ANGLE        ARC
            POSITION: [10.6, 7.5, 0, 35, 160, 0],
            TYPE: ["crowbar"],
        },
        {
            POSITION: [10.6, 7.5, 0, 110, 160, 0],
            TYPE: ["crowbar"],
        },
        {
            POSITION: [10.6, 7.5, 0, 180, 160, 0],
            TYPE: ["crowbar"],
        },
        {
            POSITION: [10.6, 7.5, 0, 252, 160, 0],
            TYPE: ["crowbar"],
        },
        {
            POSITION: [10.6, 7.5, 0, 325, 160, 0],
            TYPE: ["crowbar"],
        },
    ],
};
exports.rhea = {
    PARENT: ["celestial"],
    NAME: "Rhea",
    COLOR: 17,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [14.77, 0, 0, 0, 360, 1],
            TYPE: ["rheaLowerBody"],
        },
        {
            POSITION: [8.7, 0, 0, 0, 360, 1],
            TYPE: ["rheaUpperBody"],
        },
    ],
};

exports.solarchip = {
    PARENT: ["drone"],
    SHAPE: 4,
    HITS_OWN_TYPE: "hard",
    BODY: {
        FOV: .2,
    },
	
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 45, 0, 1],
        TYPE: ["square", { TURRET_FACES_CLIENT: true }]
    }]
};
exports.thaumaturge  = {
    PARENT: ["miniboss"],
    LABEL: "Thaumaturge ",
    DANGER: 9,
    SHAPE: 4,
    COLOR: 13,
    SIZE: 26,
    MAX_CHILDREN: 25,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: {
        FOV: 1,
        SPEED: 0.2 * base.SPEED,
        HEALTH: 10 * base.HEALTH,
        DAMAGE: 2.6 * base.DAMAGE,
    },
    GUNS: [
	{
        POSITION: [3.5, 13.65, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.7 }]),
            TYPE: ["solarchip"],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true,
        },
	},
	{
        POSITION: [3.5, 13.65, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.7 }]),
            TYPE: ["solarchip"],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true,
        },
	},
	{
        POSITION: [3.5, 13.65, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.7 }]),
            TYPE: ["solarchip"],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true,
        },
	},
	{
        POSITION: [3.5, 13.65, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.7 }]),
            TYPE: ["solarchip"],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true,
        },
	},
      {
            POSITION: [4.25, 10, 1, 8, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.pound]),
                TYPE: "bullet",
                AUTOFIRE: true,
            },
            },
      {
            POSITION: [4.25, 10, 1, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.pound]),
                TYPE: "bullet",
                AUTOFIRE: true,
            },
            },
      {
            POSITION: [4.25, 10, 1, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.pound]),
                TYPE: "bullet",
                AUTOFIRE: true,
            },
            },
      {
            POSITION: [4.25, 10, 1, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.pound]),
                TYPE: "bullet",
                AUTOFIRE: true,
            },
            },
    ],
};

exports.angus = {
    PARENT: ["miniboss"],
    LABEL: "Dreadnought",
    NAME: "Angustia Verisadfok",
    SKILL: skillSet({
        rld: 0.7,
        dam: 0.5,
        pen: 0.8,
        str: 0.5,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,
    }),
    DANGER: 8,
    SHAPE: 5.5,
    SIZE: 23,
    COLOR: 14,
    MAX_CHILDREN: 28,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: {
        FOV: 1.3,
        SPEED: 0.09 * base.SPEED,
        HEALTH: 10 * base.HEALTH,
        DAMAGE: 3 * base.DAMAGE,
    },
	    TURRETS: [
			{
				POSITION: [23, 0, 0, 0, 0, 1],
				TYPE: ["luciferOfficialV2"],
			},
			{
				POSITION: [17, 0, 0, 177, 0, 3],
				TYPE: ["pentagon", {COLOR: 9, MIRROR_MASTER_ANGLE: true}],
			},
			{
				POSITION: [26, 0, 0, 177, 0, 0],
				TYPE: ["pentagon", {COLOR: 9, MIRROR_MASTER_ANGLE: true}],
			},
		],
};

exports.kronosegg = {
    PARENT: ["miniboss"],
    LABEL: "Kronos Egg",
    DANGER: 12,
    SKILL: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    SHAPE: 11,
    CONTROLLERS: ["avoid", "wanderAroundMap", "fleeAtLowHealth", "goToMasterTarget"],
    AI: {
        NO_LEAD: false,
    },
    COLOR: 6,
    SIZE: 45,
    FACING_TYPE: "autospin",
    VALUE: 4e5,
    BODY: {
        FOV: 0.5,
        SPEED: 0.09 * base.SPEED,
        HEALTH: 10 * base.HEALTH,
        DAMAGE: 3 * base.DAMAGE,
    },
    GUNS: [{
        POSITION: {LENGTH: 0, WIDTH: 0},
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {reload: 500}]),
            TYPE: 'bullet',
            AUTOFIRE: true,
            ON_FIRE: ({body}) => {
                setTimeout(() => {
                    body.define('kronos')
                    body.sendMessage('Kronos has failed to die.')
                }, 15000)
                setTimeout(() => body.sendMessage('Kronos will Rebirth in 10 seconds.'), 5000)
            }
        }
    }]
};

exports.tranqi = {
    PARENT: ["miniboss"],
    LABEL: "Dreadnought",
    NAME: "Tranqi",
    SKILL: skillSet({
        rld: 0.7,
        dam: 0.5,
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,
    }),
    DANGER: 8,
    SHAPE: 0,
    SIZE: 14,
    COLOR: 6,
    MAX_CHILDREN: 28,
    FACING_TYPE: "toTarget",
    VALUE: 3e5,
    BODY: {
        FOV: 1.3,
        SPEED: 1.1 * base.SPEED,
        HEALTH: 8 * base.HEALTH,
        DAMAGE: 3 * base.DAMAGE,
    },
	    TURRETS: [
			{
				POSITION: [20, 0, 0, 0, 0, 0],
				TYPE: ["pacifier2OfficialV2"],
			},
			{
				POSITION: [20, 0, 0, 0, 0, 1],
				TYPE: ["atmosphereOfficialV2"],
			},
		],
};

exports.somnus = {
    PARENT: ["miniboss"],
    LABEL: "Dreadnought",
    NAME: "Somnus WIP",
    SKILL: skillSet({
        rld: 0.7,
        dam: 0.5,
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,
    }),
    DANGER: 8,
    SHAPE: 3.5,
    SIZE: 21,
    COLOR: 2,
    MAX_CHILDREN: 28,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: {
        FOV: 1.3,
        SPEED: 0.3 * base.SPEED,
        HEALTH: 9 * base.HEALTH,
        DAMAGE: 1.5 * base.DAMAGE,
    },
	    TURRETS: [
			{
				POSITION: [23, 0, 0, 0, 0, 1],
				TYPE: ["mitigatorOfficialV2"],
			},
		],
};

	exports.felixOfficialV2 = {
	    PARENT: ["genericTrinought"],
	    LABEL: "felixbody",
	    GUNS: [],
	}
	for (let i = 0; i < 3; i++) {
		exports.felixOfficialV2.GUNS.push(
			{
				POSITION: [13, 8, 1, 0, 5, 120*i, 0.5],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.85}]),
					TYPE: "bullet",
				},
			},
			{
				POSITION: [13, 8, 1, 0, -5, 120*i, 0.5],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.85}]),
					TYPE: "bullet",
				},
			},
			{
				POSITION: [15, 9, 1, 0, 0, 120*i, 0],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.85}]),
					TYPE: "bullet",
				},
			},
		)
	}

exports.felix = {
    PARENT: ["celestial"],
    LABEL: "Dreadnought",
    NAME: "Felix",
    DANGER: 8,
    SHAPE: 3.5,
    SIZE: 21,
    COLOR: 2,
    MAX_CHILDREN: 28,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: {
        FOV: 1.3,
        SPEED: 0.3 * base.SPEED,
        HEALTH: 9 * base.HEALTH,
        DAMAGE: 2 * base.DAMAGE,
    },
	    TURRETS: [
			{
				POSITION: [23, 0, 0, 0, 0, 1],
				TYPE: ["felixOfficialV2"],
			},
			{
				POSITION: [23, 0, 0, 0, 0, 0],
				TYPE: ["tripleFlail"],
			}
		],
};

exports.lorrycore = {
    PARENT: ["genericTank"],
    LABEL: "Lorry",
    COLOR: 16,
    GUNS: [
        {
            POSITION: [23, 9, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 9, 1, 0, 0, 0, 0.6666666667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 9, 1, 0, 0, 0, 0.16],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 9, 1, 0, 0, 0, 0.32],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 9, 1, 0, 0, 0, 0.64],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 9, 1, 0, 0, 0, 0.48],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 9, 1, 0, 0, 0, 0.80],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: "bullet",
            },
        },
    ],
};


exports.dormi = {
    PARENT: ["miniboss"],
    LABEL: "Dormi",
    NAME: "Dormi",
    SKILL: skillSet({
        rld: 1,
        dam: 0.5,
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,
    }),
    DANGER: 8,
    SHAPE: 0,
    COLOR: 16,
    SIZE: 14,
    MAX_CHILDREN: 28,
    FACING_TYPE: "toTarget",
    VALUE: 3e5,
    BODY: {
        FOV: 1.3,
        SPEED: 1.1 * base.SPEED,
        HEALTH: 8 * base.HEALTH,
        DAMAGE: .2 * base.DAMAGE,
    },
	    TURRETS: [
			{
				POSITION: [25, 0, 0, 0, 0, 0],
				TYPE: ["smasherBody"],
			},
			{
				POSITION: [18, 0, 0, 0, 0, 1],
				TYPE: ["lorrycore"],
			},
		],
};

exports.blissfulfelix = {
    PARENT: ["eternal"],
    LABEL: "Dreadnought",
    NAME: "Blissful Felix",
    DANGER: 8,
    SHAPE: 3.5,
    SIZE: 50,
    COLOR: 2,
    MAX_CHILDREN: 28,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: {
        FOV: 1.3,
        SPEED: 0.1 * base.SPEED,
        HEALTH: 25 * base.HEALTH,
        DAMAGE: 14 * base.DAMAGE,
    },
	    TURRETS: [
			{
				POSITION: [55, 0, 0, 0, 0, 3],
				TYPE: ["felixOfficialV2"],
			},
			{
				POSITION: [55, 0, 0, 0, 0, 2],
				TYPE: ["hydraOfficialV2"],
			},
			{
				POSITION: [55, 0, 0, 0, 0, 1],
				TYPE: ["goliathOfficialV2"],
			},
			{
				POSITION: [45, 0, 0, 0, 0, 0],
				TYPE: ["suppressorOfficialV2"],
			},
			{
				POSITION: [55, 0, 0, 0, 0, 0],
				TYPE: ["tripleFlail"],
			}
		],
};


// Tartarus
exports.tartarusminion = {
    PARENT: ["drone"],
    DRAW_HEALTH: true,
    SHAPE: 3,
    INDEPENDENT: true,
    BODY: {
        PUSHABILITY: 0.3,
        HEALTH: 0.3*2,
        DAMAGE: 3.375/2,
        SPEED: 1.4,
        DENSITY: 0.1,
        RESIST: 2,
        FOV: 100,
    },
    GUNS: Array(3).fill().map((_, i) => ({
        POSITION: [10, 8.65, 1.2, 8, 0, i * 120, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
            TYPE: "bullet",
            AUTOFIRE: true,
        },
    }))
}
exports.tartarusminionauto = makeAuto(exports.tartarusminion, "Auto-Tartarus Drone");
exports.tartarusTwin = {
    PARENT: ["auto4gun"],
    COLOR: 16,
    MAX_CHILDREN: 8,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.auto, g.power, g.slow, g.slow, g.slow]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.auto, g.power, g.slow, g.slow, g.slow]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.auto, g.power, g.slow, g.slow, g.slow]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.auto, g.power, g.slow, g.slow, g.slow]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
    ],
}
exports.tartarusPillbox = {
    PARENT: ["unsetTrap"],
    SHAPE: -3,
    LABEL: "Pillbox",
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "tartarusTwin",
        },
    ],
}
exports.tartarusTop = {
    PARENT: ["elite"],
    COLOR: 2,
    MAX_CHILDREN: 10,
    AI: { STRAFE: false, NO_LEAD: false },
    CONTROLLERS: [
        ["spin", { independent: true, speed: -0.005 }],
        //"nearestDifferentMaster",
    ],
    INDEPENDENT: true,
    GUNS: [],
    TURRETS: [],
}
for (let i = 0; i < 3; i++) {
    exports.tartarusTop.GUNS.push(
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4.5, 4, 1, 10.5, -5, 120*i+60, 0],
        },
        {
            POSITION: [4, 3.7, 0.7, 7, -5, 120*i+60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.summoner, g.drone, g.pound]),
                TYPE: [ "tartarusminionauto"],
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.necro,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 4.7, 1, 0, -5, 120*i+60, 0],
        },
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4.5, 4, 1, 10.5, 5, 120*i+60, 0],
        },
        {
            POSITION: [4, 3.7, 0.7, 7, 5, 120*i+60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.summoner, g.drone, g.pound]),
                TYPE: [ "tartarusminionauto"],
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.necro,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 4.7, 1, 0, 5, 120*i+60, 0],
        },
    )
    exports.tartarusTop.TURRETS.push(
        {
            POSITION: [9.5, 10, 0, 120*i, 190, 0],
            TYPE: "sniper",
        },
			{
				POSITION: [14, 0, 0, 0, 0, 1],
				TYPE: ['triangle', {COLOR: 9, MIRROR_MASTER_ANGLE: true}]
			},
			{
				POSITION: [24, 0, 0, 0, 0, 0],
				TYPE: ['triangle', {COLOR: 9, MIRROR_MASTER_ANGLE: true}]
			},
    )
}
exports.tartarus = {
    PARENT: ["elite"],
    LABEL: "Tartarus",
    AI: { STRAFE: false, NO_LEAD: false },
    HAS_NO_RECOIL: true,
    VALUE: 5e6,
    COLOR: 2,
    SIZE: 80,
    BODY: {
        FOV: 1.5,
        SPEED: 0.1 * base.SPEED,
        HEALTH: 2000,
        DAMAGE: 5 * base.DAMAGE,
    },
    GUNS: [],
    TURRETS: [
		{
				POSITION: [24, 0, 0, 0, 0, 0.1],
				TYPE: ['triangle', {COLOR: 9, MIRROR_MASTER_ANGLE: true}]
		},
		{
				POSITION: [18, 0, 0, 0, 0, 0.2],
				TYPE: ['triangle', {COLOR: 2, MIRROR_MASTER_ANGLE: true}]
		},
		{
				POSITION: [14, 0, 0, 0, 0, 1],
				TYPE: ['triangle', {COLOR: 9, MIRROR_MASTER_ANGLE: true}]
		},
        {
            POSITION: [12, 0, 0, 0, 360, 1],
            TYPE: "tartarusTop",
        },
    ],
}
for (let i = 0; i < 3; i++) {
    exports.tartarus.GUNS.push(
        {
            POSITION: [14.5, 13, 1, 0, 0, 120*i, 0],
        },
        {
            POSITION: [3, 13, 1.7, 14.5, 0, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.pound, g.destroy, g.veryfast, g.mini, {maxSpeed: 3}]),
                TYPE: "tartarusPillbox",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    )
}
for (let i = 0; i < 3; i++) {
    exports.tartarus.GUNS.push(
        {
            POSITION: [5, 12, 1.6, -11, 0, 120*i, 0],
        }
    )
    exports.tartarus.TURRETS.push(
        {
            POSITION: [14, 8, 0, 120*i+60, 180, 0],
            TYPE: [ "launcher", { COLOR: 2, } ],
        },
    )
>>>>>>> Stashed changes
}
