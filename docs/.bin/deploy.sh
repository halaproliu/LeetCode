#!/bin/bash
npm run gen
npm run build
npm run push $1
