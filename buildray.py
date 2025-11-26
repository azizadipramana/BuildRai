import os
import click 
import subprocess
import time


import click
import os
import shutil

LOGO = r"""
 /$$$$$$$            /$$ /$$       /$$ /$$$$$$$            /$$
| $$__  $$          |__/| $$      | $$| $$__  $$          |__/
| $$  \ $$ /$$   /$$ /$$| $$  /$$$$$$$| $$  \ $$  /$$$$$$  /$$
| $$$$$$$ | $$  | $$| $$| $$ /$$__  $$| $$$$$$$/ |____  $$| $$
| $$__  $$| $$  | $$| $$| $$| $$  | $$| $$__  $$  /$$$$$$$| $$
| $$  \ $$| $$  | $$| $$| $$| $$  | $$| $$  \ $$ /$$__  $$| $$
| $$$$$$$/|  $$$$$$/| $$| $$|  $$$$$$$| $$  | $$|  $$$$$$$| $$
|_______/  \______/ |__/|__/ \_______/|__/  |__/ \_______/|__/
"""


def show_banner():

    term_width = shutil.get_terminal_size().columns
    banner_lines = LOGO.splitlines()
    centered_banner = "\n".join(line.center(term_width) for line in banner_lines)

    click.echo(click.style(centered_banner, fg="cyan", bold=True))

    subtitle = "⚡ BuildRai CLI — Docker Automation Toolkit ⚡"
    click.echo(click.style(subtitle.center(term_width), fg="yellow", bold=True))

    version = "Version 1.0.0"
    click.echo(click.style(version.center(term_width), fg="white"))

    click.echo(click.style("-" * term_width, fg="bright_black"))

    repo = "Repo: https://github.com/azizadipramana/BuildRai"
    click.echo(click.style(repo.center(term_width), fg="green"))

    author = "Created by: Aziz Adi Pramana"
    click.echo(click.style(author.center(term_width), fg="magenta"))

    click.echo(click.style("-" * term_width, fg="bright_black"))
    print() 


def slow_print(text, delay=0.05):
    for c in text:
        print(c, end="", flush=True)
        time.sleep(delay)
    print()  

def line_animation(lines, delay=0.35):
    for line in lines:
        print(line)
        time.sleep(delay)

def exit_animation():
    lines = [
        click.style("Shutting down BuildRai CLI...", fg="white"),
        click.style("Thanks for using BuildRai ❤️", fg="green", bold=True),
        click.style("Contribute: https://github.com/azizadipramana/BuildRai", fg="yellow"),
        click.style("Goodbye!", fg="red", bold=True),
    ]
    line_animation(lines)


def generate_dockerfile(base_image="ubuntu:22.04", packages=None):
    if packages is None:
        packages = ["iputils-ping", "iproute2", "net-tools", "iptables", "curl", "wget", "dnsutils", "traceroute"]

    dockerfile_content = f"""
FROM {base_image}

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && apt install -y \\
    {' \\\n    '.join(packages)} \\
    && apt clean

CMD ["/bin/bash"]
"""
    with open("Dockerfile", "w") as f:
        f.write(dockerfile_content)
    
    print("Dockerfile generated successfully!")


def build_docker_image(image_name="auto_image"):
    """
    Build Docker image from current Dockerfile
    """
    cmd = ["docker", "build", "-t", image_name, "."]
    process = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)

    for line in process.stdout:
        print(line.strip())
    
    process.wait()
    if process.returncode == 0:
        print(f"Image '{image_name}' built successfully!")
    else:
        print(f"Failed to build image '{image_name}'.")


def run_docker_container(image_name="auto_image"):
    """
    Run container interactively
    """
    cmd = ["docker", "run", "-it", "--rm", image_name]
    subprocess.run(cmd)


@click.group()
def cli(): 
    pass

@cli.command()
def build():
    click.echo(click.style("Build processing........", fg="green"))
    generate_dockerfile()
    build_docker_image("my_network_tools")


@cli.command()
def logo():
    click.echo(click.style(LOGO, fg="red", bold=True))

@cli.command()
def push():
    click.echo(click.style("Push processing......", fg="purple"))


@cli.command()
def status():
    cmd = ["docker", "images"]
    process = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)

    for line in process.stdout:
        click.echo(line.strip())
    process.wait()  

@cli.command()
def start():
    cmd = ["docker", "desktop", "start"]
    process = subprocess.Popen(
        cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, text=True
    )

    if process.stdout:
        for line in process.stdout:
            click.echo(line.strip())

    process.wait()

    if process.returncode == 0:
        click.secho("Docker Started... ", fg="green", delay=0.06)
    else:
        click.secho("Docker Start Failed", fg="green", delay=0.06)


@cli.command()
def stop():
    cmd = ["docker", "desktop", "stop"]
    process = subprocess.Popen(
        cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, text=True
    )

    process.wait()  # tidak perlu loop

    if process.returncode == 0:
        click.secho("... Docker Stopped", fg="green", delay=0.06)
    else:
        click.secho("Docker Stopp Failed", fg="red", delay=0.06)

@cli.command()
def run():
    click.echo(click.style("Choose image from this list"))
    status()

    image_name = click.prompt(
        click.style("Enter the image name you want to run", fg="cyan"),
        type=str
    )

    run_docker_container("image_name")
    

@cli.command()
def clean():
    if os.name == "nt": 
        os.system('cls')


@cli.command()
def exit():
    raise SystemExit

def interact():
    show_banner()
    click.echo(click.style("Type: --help for more information"))

    while True:
        cmd = input(click.style("buildrai > ", fg='magenta', bold=True))

        if cmd.strip() == "":
            continue
        
        try:
            cli.main(args=cmd.split(), standalone_mode=False)
        except SystemExit: 
            exit_animation()
            break
        except Exception as e: 
            click.echo(click.style(f"Error: {e}", fg="red"))


if __name__ == "__main__":
    interact()