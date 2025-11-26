# BuildRai CLI ⚡

BuildRai CLI is a lightweight command-line tool for automating Docker operations, generating Dockerfiles, building and running images with custom tools, and managing containers efficiently.

## Features ✅

- Generate Dockerfile automatically
- Build and run Docker images from CLI
- Network tools included (ping, iptables, curl, wget, etc.)
- Interactive CLI with colored prompt using `click`
- Version 0.1.0

## Installation 🛠️

### Prerequisites
- Python 3.11+ installed
- Docker Desktop installed

### Under Constructions
- Currently, you can only configure images via buildrai.py. Direct CLI configuration of images is not yet supported.
- CLI provides only simple tasks at the moment.
- Codebase is still minimal and needs refactoring for better structure and readability.
  
### Plan 
- Enable users to configure Dockerfiles directly from the CLI through interactive choices.
- Improve CLI features and code structure for maintainability.

## Acknowledgements 🤖
- AI-assisted generation for some CLI code and README content.

## List Bug 
- run - can not use properly because after type run will exit immediatly


### Clone repository

```bash
git clone https://github.com/azizadipramana/buildrai.git
cd buildrai
