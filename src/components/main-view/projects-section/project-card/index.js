import React from 'react';
import TechList from './tech-list';
import FooterLink from './footer-link';

function projectCard({ project }) {
  const {
    name,
    description,
    role,
    notes,
    image,
    tech,
    links
  } = project;

  // Show section even if there is no data for it. Doesn't apply to "Note(s)" section.
  const showEmptySections = false;

  return (
    <div class="project card">

      <div class="card-header">
        <h3>{name}</h3>
      </div>

      {(image || showEmptySections) &&
        <div class="card-body">
          <img src={image} alt={`${name} screenshot`} />
        </div>
      }

      {(description || showEmptySections) &&
        <div class="card-body">
          {description}
        </div>
      }

      {(role || showEmptySections) &&
        <div class="card-body">
          <h6>My Role</h6>
          {role === 1 ? 'Sole Developer' : role}
        </div>
      }

      {((tech && (tech.front || tech.back || tech.api || tech.general)) || showEmptySections) &&
        <div class="card-body">
          <h6>Technologies Used</h6>
          {tech.general &&
            <TechList list={tech.general} />
          }
          {(tech.front || tech.back || tech.api) &&
            <div className="row">
              <div className="col-6">
                {tech.front &&
                  <TechList label="Front End" list={tech.front} />
                }
                {tech.api &&
                  <>
                    {tech.front && <br />}
                    <TechList label="Public APIs" list={tech.api} />
                  </>
                }
              </div>
              <div className="col-6">
                {tech.back &&
                  <TechList label="Back  End" list={tech.back} />
                }
              </div>
            </div>
          }
        </div>
      }

      {notes && notes.length &&
        <div class="card-body">
          <h6>Note{notes.length > 1 && 's'}</h6>
          {notes}
        </div>
      }

      <div class="card-footer">
        <div class="btn-group" role="group" aria-label="links">
          <FooterLink url={links.repo}>
            Repository
          </FooterLink>
          <FooterLink url={links.deployed || links.video}>
            {links.deployed ?
              <>Deployed<br />Page</> :
              <>Demo<br />Video</>
            }
          </FooterLink>
          <FooterLink url={links.readme}>
            Readme
          </FooterLink>
        </div>
      </div>
    </div>
  );
}

export default projectCard;