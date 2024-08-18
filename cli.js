#!/usr/bin/env node

import { program } from "commander";
import { writeFileSync } from "fs";

program
    .option("--init");

program.parse();

const options = program.opts();

if (options.init) {
    writeFileSync(
        "dprint.json",
        JSON.stringify({
            "extends": "node_modules/@kaplayjs/dprint-config/dprint.json",
        }),
        "utf8",
    );
}
